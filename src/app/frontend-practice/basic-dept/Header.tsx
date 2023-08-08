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

    // TODO: Maybe figure out a way to abstract this threshold?
    if (data.animatedScroll > window.innerHeight * 0.75) {
      // TODO: Extract colors
      containerRef.current.style.background = "rgba(245, 245, 245, 1.0)";
      containerRef.current.style.color = "rgb(41, 37, 36)";
    } else {
      // TODO: Extract colors
      containerRef.current.style.backgroundColor = "rgba(245, 245, 245, 0.0)";
      containerRef.current.style.color = "rgb(245, 245, 245)";
    }
  });

  return (
    <header
      ref={containerRef}
      className={
        "fixed left-0 right-0 top-0 z-50 flex flex-row justify-between bg-neutral-100 px-10 py-10 transition-colors duration-300"
      }
    >
      <span className="font-extrabold">{"BRYAN/LINZ®"}</span>
      <button>{"MENU"}</button>
    </header>
  );
}
