"use client";

import { useRef } from "react";

const cursorSizeInPx = 96;

export function HeroSection() {
  const customCursorContainerRef = useRef<HTMLDivElement>(null!);
  const customCursorRef = useRef<HTMLDivElement>(null!);

  return (
    <section
      className="relative h-screen w-full bg-green-500"
      onPointerMove={(e) => {
        const position = { x: e.clientX, y: e.clientY };
        customCursorContainerRef.current.style.top = `${
          position.y - customCursorRef.current.clientHeight / 2
        }px`;
        customCursorContainerRef.current.style.left = `${
          position.x - customCursorRef.current.clientWidth / 2
        }px`;
      }}
    >
      <div className="absolute" ref={customCursorContainerRef}>
        <div
          className={`h-24 w-24 rounded-full bg-neutral-100`}
          ref={customCursorRef}
        ></div>
      </div>
    </section>
  );
}
