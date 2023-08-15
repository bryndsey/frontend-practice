"use client";

import { useRef } from "react";
import { useSmoothScroll } from "../components/SmoothScroll";
import Link from "next/link";

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
      containerRef.current.style.background =
        "rgb(var(--color-backdrop) / 1.0)";
      containerRef.current.style.color = "rgb(var(--color-content))";
    } else {
      containerRef.current.style.background =
        "rgb(var(--color-backdrop) / 0.0)";
      containerRef.current.style.color = "rgb(var(--color-backdrop))";
    }
  });

  return (
    <header
      ref={containerRef}
      className={
        "bg-backdrop fixed left-0 right-0 top-0 z-50 flex flex-row justify-between px-10 py-10 transition-colors duration-300 md:px-16 xl:px-20"
      }
    >
      <span className="font-extrabold">{"BRYAN/LINZ®"}</span>
      <Link href="/">{"BACK"}</Link>
    </header>
  );
}
