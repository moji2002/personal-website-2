"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface OptimizedAvatarProps {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
}

export function OptimizedAvatar({
  src,
  alt,
  fallback,
  className,
}: OptimizedAvatarProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center rounded-full bg-muted text-lg font-semibold text-foreground",
          className
        )}
      >
        {fallback}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={256}
      height={256}
      sizes="(max-width: 768px) 96px, 128px"
      className={cn("aspect-square h-full w-full object-cover", className)}
      onError={() => setImageError(true)}
    />
  );
}
