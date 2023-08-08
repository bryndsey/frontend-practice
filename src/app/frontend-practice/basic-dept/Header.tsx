"use client";

import { useRef } from "react";
import { useSmoothScroll } from "./SmoothScroll";

export function Header() {
  const offset = useRef(0);
  const containerRef = useRef<HTMLElement>(null!);

  useSmoothScroll((data) => {
    let newOffset = offset.current + data.velocity * 1.5;
    if (newOffset > 100) {
      newOffset = 100;
    }
    if (newOffset < 0) {
      newOffset = 0;
    }
    offset.current = newOffset;

    containerRef.current.style.transform = `translateY(-${offset.current}%)`;
  });

  return (
    <header
      ref={containerRef}
      // style={{ transform: `translateY(-${offsetPercent}%)` }}
      className={
        "fixed left-0 right-0 top-0 flex flex-row justify-between px-14 py-10"
      }
    >
      <span className="font-extrabold">{"BRYAN/LINZ®"}</span>
      <button>{"MENU"}</button>
    </header>
  );
}
