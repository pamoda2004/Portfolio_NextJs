"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type SectionParallaxWordProps = {
  text: string;
  className?: string;
  dark?: boolean;
};

export default function SectionParallaxWord({
  text,
  className,
  dark = false,
}: SectionParallaxWordProps) {
  const wordRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = wordRef.current;
    if (!element) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          xPercent: -8,
        },
        {
          xPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wordRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 whitespace-nowrap text-[18vw] font-black uppercase leading-none tracking-[-0.08em]",
        dark ? "text-white/[0.045]" : "text-black/[0.04]",
        className
      )}
    >
      {text}
    </div>
  );
}