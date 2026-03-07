"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ReduceMotionContext = createContext<boolean>(false);

export function ReduceMotionProvider({
  children,
  reduceMotion: serverReduceMotion,
}: {
  children: React.ReactNode;
  reduceMotion: boolean;
}) {
  const [reduceMotion, setReduceMotion] = useState(serverReduceMotion);

  useEffect(() => {
    if (serverReduceMotion) {
      setReduceMotion(true);
      return;
    }
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [serverReduceMotion]);

  return (
    <ReduceMotionContext.Provider value={reduceMotion}>
      {children}
    </ReduceMotionContext.Provider>
  );
}

export function useReduceMotion(): boolean {
  return useContext(ReduceMotionContext);
}
