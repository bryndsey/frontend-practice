"use client";

import { motion, useSpring } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const customCursorContainerRef = useRef<HTMLDivElement>(null!);
  const customCursorRef = useRef<HTMLDivElement>(null!);

  const cursorSpringX = useSpring(0, {
    damping: 15,
    mass: 0.15,
    stiffness: 200,
  });
  const cursorSpringY = useSpring(0, {
    damping: 15,
    mass: 0.15,
    stiffness: 200,
  });

  return (
    <section
      className="relative h-screen w-full bg-green-500"
      onPointerMove={(e) => {
        const position = { x: e.pageX, y: e.pageY };
        cursorSpringX.set(position.x - customCursorRef.current.clientWidth / 2);
        cursorSpringY.set(
          position.y - customCursorRef.current.clientHeight / 2,
        );
      }}
      onPointerLeave={(e) => {
        cursorSpringX.set(
          e.currentTarget.clientWidth / 2 -
            customCursorRef.current.clientWidth / 2,
        );
        cursorSpringY.set(
          e.currentTarget.clientHeight / 2 -
            customCursorRef.current.clientHeight / 2,
        );
      }}
    >
      <motion.div
        ref={customCursorContainerRef}
        style={{ x: cursorSpringX, y: cursorSpringY }}
        className="pointer-events-none absolute"
      >
        <div
          className={`grid h-32 w-32 rounded-full bg-neutral-100`}
          ref={customCursorRef}
        >
          <span className="m-auto place-items-center text-center text-sm font-bold">
            {"WATCH"}
            <br />
            {"REEL"}
          </span>
        </div>
        <p className="m-auto pt-2 text-center text-xs font-bold text-neutral-100">
          {"BRYAN/LINZ®"}
          <br />
          {"2023-?"}
        </p>
      </motion.div>
    </section>
  );
}
