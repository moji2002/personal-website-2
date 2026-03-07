"use client";

import dynamic from "next/dynamic";

const FlickeringGrid = dynamic(
  () =>
    import("@/components/magicui/flickering-grid").then((m) => ({
      default: m.FlickeringGrid,
    })),
  { ssr: false },
);

interface FlickeringGridWrapperProps
  extends React.ComponentProps<typeof FlickeringGrid> {}

export function FlickeringGridWrapper(props: FlickeringGridWrapperProps) {
  return <FlickeringGrid {...props} />;
}
