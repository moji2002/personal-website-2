"use client";

import React, { createContext, useContext } from "react";

const ReduceMotionContext = createContext<boolean>(false);

export function ReduceMotionProvider({
  children,
  reduceMotion,
}: {
  children: React.ReactNode;
  reduceMotion: boolean;
}) {
  return (
    <ReduceMotionContext.Provider value={reduceMotion}>
      {children}
    </ReduceMotionContext.Provider>
  );
}

export function useReduceMotion(): boolean {
  return useContext(ReduceMotionContext);
}
