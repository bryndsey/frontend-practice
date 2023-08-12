"use client";

import { useEffect, useRef } from "react";
import useResizeObserver from "@react-hook/resize-observer";
import { animated, useSpringValue } from "@react-spring/web";

export function HeroSection() {
  const cursorHitboxRef = useRef<HTMLDivElement>(null!);
  const customCursorContainerRef = useRef<HTMLDivElement>(null!);

  const cursorX = useSpringValue(0, {
    config: {
      friction: 15,
      mass: 0.15,
      tension: 200,
    },
  });
  const cursorY = useSpringValue(0, {
    config: {
      friction: 15,
      mass: 0.15,
      tension: 200,
    },
  });

  const cursorOpacity = useSpringValue(0, {
    config: {
      duration: 200,
    },
  });

  useEffect(() => {
    cursorX.set(cursorHitboxRef.current.clientWidth / 2);
    cursorY.set(cursorHitboxRef.current.clientHeight / 2);

    cursorOpacity.start(1);
  }, []);

  useResizeObserver(cursorHitboxRef, () => {
    cursorX.set(cursorHitboxRef.current.clientWidth / 2);
    cursorY.set(cursorHitboxRef.current.clientHeight / 2);
  });

  return (
    <section
      className="relative h-screen w-full bg-green-500"
      onPointerMove={(e) => {
        cursorX.start(e.pageX);
        cursorY.start(e.pageY);
      }}
      onPointerLeave={(e) => {
        cursorX.start(e.currentTarget.clientWidth / 2);
        cursorY.start(e.currentTarget.clientHeight / 2);
      }}
      ref={cursorHitboxRef}
    >
      <animated.div
        ref={customCursorContainerRef}
        style={{ x: cursorX, y: cursorY, opacity: cursorOpacity }}
        className="pointer-events-none absolute"
      >
        <CursorContent />
      </animated.div>
    </section>
  );
}

function CursorContent() {
  const customCursorRef = useRef<HTMLDivElement>(null!);

  // TODO: Ideally, the y translation wouldn't be hard-coded but actually calculated from the circle's size
  return (
    <div className="-translate-x-1/2 -translate-y-16">
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
    </div>
  );
}
