"use client";

import { useReduceMotion } from "@/components/reduce-motion-provider";
import { cn } from "@/lib/utils";
import { motion, type MotionValue, useMotionValue, useSpring, useTransform } from "motion/react";
import { createContext, useContext, useRef, type ReactNode } from "react";

interface DockProps {
  className?: string;
  children: ReactNode;
  magnification?: number;
  distance?: number;
}

interface DockIconProps {
  className?: string;
  children?: ReactNode;
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 100;
const BASE_SIZE = 40;
const BASE_ICON_SIZE = 20;
const ICON_SIZE_RATIO = 0.5;
const SPRING = { mass: 0.1, stiffness: 150, damping: 12 };

interface DockContextValue {
  mouseX: MotionValue<number>;
  magnification: number;
  distance: number;
}

const DockContext = createContext<DockContextValue | null>(null);

const Dock = ({ className, children, magnification = DEFAULT_MAGNIFICATION, distance = DEFAULT_DISTANCE }: DockProps) => {
  const reduceMotion = useReduceMotion();
  const mouseX = useMotionValue(Infinity);

  if (reduceMotion) {
    return (
      <div
        className={cn("mx-auto w-max h-full flex items-end justify-center overflow-visible rounded-full border", className)}
      >
        {children}
      </div>
    );
  }

  return (
    <DockContext.Provider value={{ mouseX, magnification, distance }}>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn("mx-auto w-max h-full flex items-end justify-center overflow-visible rounded-full border", className)}
      >
        {children}
      </motion.div>
    </DockContext.Provider>
  );
};

const AnimatedDockIcon = ({
  className,
  children,
  mouseX,
  magnification,
  distance,
}: DockIconProps & { mouseX: MotionValue<number>; magnification: number; distance: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const containerSize = useSpring(
    useTransform(distanceCalc, [-distance, 0, distance], [BASE_SIZE, magnification, BASE_SIZE]),
    SPRING
  );
  const iconSize = useSpring(
    useTransform(distanceCalc, [-distance, 0, distance], [BASE_ICON_SIZE, magnification * ICON_SIZE_RATIO, BASE_ICON_SIZE]),
    SPRING
  );

  return (
    <motion.div
      ref={ref}
      style={{ width: containerSize, height: containerSize }}
      className={cn("relative flex aspect-square items-center justify-center rounded-full shrink-0", className)}
    >
      <motion.div
        style={{ width: iconSize, height: iconSize }}
        className="flex items-center justify-center"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const DockIcon = ({ className, children }: DockIconProps) => {
  const reduceMotion = useReduceMotion();
  const context = useContext(DockContext);

  if (reduceMotion || !context) {
    return (
      <div
        style={{ width: BASE_SIZE, height: BASE_SIZE }}
        className={cn("relative flex aspect-square items-center justify-center rounded-full shrink-0", className)}
      >
        <div
          style={{ width: BASE_ICON_SIZE, height: BASE_ICON_SIZE }}
          className="flex items-center justify-center"
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <AnimatedDockIcon
      className={className}
      mouseX={context.mouseX}
      magnification={context.magnification}
      distance={context.distance}
    >
      {children}
    </AnimatedDockIcon>
  );
};

export { Dock, DockIcon };
export type { DockProps, DockIconProps };
