"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, {
    stiffness: 450,
    damping: 35,
    mass: 0.5,
  });

  const springY = useSpring(mouseY, {
    stiffness: 450,
    damping: 35,
    mass: 0.5,
  });

  useEffect(() => {
    const canUseCursor =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const frame = requestAnimationFrame(() => {
      setEnabled(canUseCursor);
    });

    if (!canUseCursor) {
      return () => cancelAnimationFrame(frame);
    }

    function handleMouseMove(event: MouseEvent) {
      mouseX.set(event.clientX - 10);
      mouseY.set(event.clientY - 10);
    }

    function isHoverTarget(target: EventTarget | null) {
      if (!(target instanceof HTMLElement)) return false;

      return Boolean(
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor='hover']")
      );
    }

    function handleMouseOver(event: MouseEvent) {
      if (isHoverTarget(event.target)) {
        setHovering(true);
      }
    }

    function handleMouseOut(event: MouseEvent) {
      const target = event.target as HTMLElement;
      const nextTarget = event.relatedTarget as HTMLElement | null;

      const leavingHoverElement =
        isHoverTarget(target) && !isHoverTarget(nextTarget);

      if (leavingHoverElement) {
        setHovering(false);
      }
    }

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        x: springX,
        y: springY,
      }}
      animate={{
        width: hovering ? 54 : 20,
        height: hovering ? 54 : 20,
        opacity: hovering ? 0.95 : 0.75,
      }}
      transition={{
        duration: 0.22,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="pointer-events-none fixed left-0 top-0 z-[10000] hidden rounded-full bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_18px_45px_rgba(0,0,0,0.18)] mix-blend-difference will-change-transform md:block"
    />
  );
}