"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
interface FlickeringGridWrapperProps extends React.ComponentProps<
  typeof import("@/components/magicui/flickering-grid").FlickeringGrid
> {}

export function FlickeringGridWrapper(props: FlickeringGridWrapperProps) {
  const [Grid, setGrid] =
    useState<React.ComponentType<FlickeringGridWrapperProps> | null>(null);

  useEffect(() => {
    import("@/components/magicui/flickering-grid").then((m) => {
      setGrid(() => m.FlickeringGrid);
    });
  }, []);

  if (!Grid) {
    return (
      <div
        className={cn("h-full w-full opacity-0", props.className)}
        aria-hidden
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={cn("h-full w-full", props.className)}
    >
      <Grid {...props} />
    </motion.div>
  );
}
