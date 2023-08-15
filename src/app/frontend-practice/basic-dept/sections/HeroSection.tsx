"use client";

import { useRef } from "react";
import CustomCursorArea from "../components/CustomCursorArea";

export function HeroSection() {
  const customCursorContainerRef = useRef<HTMLDivElement>(null!);

  return (
    <section className="h-screen w-full cursor-none bg-green-500">
      <CustomCursorArea
        calculateRestPosition={() => ({
          x: customCursorContainerRef.current.clientWidth / 2,
          y: customCursorContainerRef.current.clientHeight / 2,
        })}
        ref={customCursorContainerRef}
        className="h-full w-full"
      >
        <CursorContent />
      </CustomCursorArea>
    </section>
  );
}

function CursorContent() {
  const customCursorRef = useRef<HTMLDivElement>(null!);

  // TODO: Ideally, the y translation wouldn't be hard-coded but actually calculated from the circle's size
  return (
    <div className="-translate-x-1/2 -translate-y-16">
      <div
        className={`bg-backdrop grid h-32 w-32 rounded-full`}
        ref={customCursorRef}
      >
        <span className="m-auto place-items-center text-center text-sm font-bold">
          {"WATCH"}
          <br />
          {"REEL"}
        </span>
      </div>
      <p className="text-backdrop m-auto pt-2 text-center text-xs font-bold">
        {"BRYAN/LINZ®"}
        <br />
        {"2023-?"}
      </p>
    </div>
  );
}
