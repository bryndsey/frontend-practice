"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";
import "./lenis.css";

export function SmoothScroll({ children }: { children: ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>;
}
