"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Lenis from "@studio-freight/lenis";
import { ReactNode } from "react";
import "./lenis.css";

export function SmoothScroll({ children }: { children: ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>;
}

export type SmoothScrollData = {
  velocity: number;
  progress: number;
};

export function useSmoothScroll(
  onScrollChanged: (data: SmoothScrollData) => void,
  dependencies?: any[],
) {
  useLenis((lenis: Lenis) => {
    onScrollChanged(lenis);
  }, dependencies);
}
