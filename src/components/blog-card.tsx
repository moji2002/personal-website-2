/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function BlogImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href: string;
  description: string;
  dates: string;
  image?: string;
  className?: string;
}

export function BlogCard({
  title,
  href,
  description,
  dates,
  image,
  className,
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 cursor-pointer hover:ring-muted transition-all duration-200",
        className
      )}
    >
      <div className="relative shrink-0">
        {image ? (
          <BlogImage src={image} alt={title} />
        ) : (
          <div className="w-full h-48 bg-muted" />
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          <span
            className="text-muted-foreground group-hover:text-foreground transition-colors"
            aria-hidden
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <p className="text-xs flex-1 text-pretty font-sans leading-relaxed text-muted-foreground line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  );
}
