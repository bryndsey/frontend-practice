"use client";

import { useEffect, useRef } from "react";
import useResizeObserver from "@react-hook/resize-observer";
import { animated, useSpringValue } from "@react-spring/web";

export function HeroSection() {
  const cursorHitboxRef = useRef<HTMLDivElement>(null!);
  const customCursorContainerRef = useRef<HTMLDivElement>(null!);
  const customCursorRef = useRef<HTMLDivElement>(null!);

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
    cursorX.set(
      cursorHitboxRef.current.clientWidth / 2 -
        customCursorRef.current.clientWidth / 2,
    );
    cursorY.set(
      cursorHitboxRef.current.clientHeight / 2 -
        customCursorRef.current.clientHeight / 2,
    );

    cursorOpacity.start(1);
  }, []);

  useResizeObserver(cursorHitboxRef, () => {
    cursorX.set(
      cursorHitboxRef.current.clientWidth / 2 -
        customCursorRef.current.clientWidth / 2,
    );
    cursorY.set(
      cursorHitboxRef.current.clientHeight / 2 -
        customCursorRef.current.clientHeight / 2,
    );
  });

  return (
    <section
      className="relative h-screen w-full cursor-none bg-green-500"
      onPointerMove={(e) => {
        const position = { x: e.pageX, y: e.pageY };
        cursorX.start(position.x - customCursorRef.current.clientWidth / 2);
        cursorY.start(position.y - customCursorRef.current.clientHeight / 2);
      }}
      onPointerLeave={(e) => {
        cursorX.start(
          e.currentTarget.clientWidth / 2 -
            customCursorRef.current.clientWidth / 2,
        );
        cursorY.start(
          e.currentTarget.clientHeight / 2 -
            customCursorRef.current.clientHeight / 2,
        );
      }}
      ref={cursorHitboxRef}
    >
      <animated.div
        ref={customCursorContainerRef}
        style={{ x: cursorX, y: cursorY, opacity: cursorOpacity }}
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
      </animated.div>
    </section>
  );
}
