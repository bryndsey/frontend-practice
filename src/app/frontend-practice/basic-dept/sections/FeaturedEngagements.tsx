"use client";

import useResizeObserver from "@react-hook/resize-observer";
import { useCallback, useRef } from "react";
import { EngagementsList } from "./EngagementsList";

export function FeaturedEngagements() {
  const sectionRef = useRef<HTMLElement>(null!);
  const contentRef = useRef<HTMLDivElement>(null!);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null!);

  const updateCustomScrollbar = useCallback(() => {
    const widthPercent =
      sectionRef.current.clientWidth / contentRef.current.scrollWidth;

    const offsetPercent =
      contentRef.current.scrollLeft / sectionRef.current.clientWidth;

    scrollIndicatorRef.current.style.width = `${widthPercent * 100}%`;

    scrollIndicatorRef.current.style.transform = `translateX(${
      offsetPercent * 100
    }%)`;
  }, [sectionRef, contentRef, scrollIndicatorRef]);

  useResizeObserver(sectionRef, updateCustomScrollbar);

  return (
    <section className="overflow-visible p-10 md:p-16 xl:p-20" ref={sectionRef}>
      <h2 className="text-2xl font-semibold">FEATURED ENGAGEMENTS</h2>

      {/* TODO: Don't hardcode the margin offset to account for padding - have it be calculated instead */}
      <div
        ref={contentRef}
        className="no-scrollbar -mx-10 overflow-x-auto pt-16 md:-mx-16 xl:-mx-20"
        onScroll={updateCustomScrollbar}
      >
        <div className="w-fit px-10 md:px-16 xl:px-20">
          <EngagementsList />
        </div>
      </div>

      <div className="bg-content relative mt-24 h-[2px] w-full bg-opacity-25">
        <div
          className="bg-content absolute left-0 top-0 h-full"
          ref={scrollIndicatorRef}
        ></div>
      </div>
    </section>
  );
}
