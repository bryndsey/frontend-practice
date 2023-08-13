"use client";

import useResizeObserver from "@react-hook/resize-observer";
import { useCallback, useRef } from "react";

export function FeaturedEngagments() {
  const sectionRef = useRef<HTMLElement>(null!);
  const contentRef = useRef<HTMLUListElement>(null!);
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
    <section className="overflow-visible p-11 xl:p-20" ref={sectionRef}>
      <h2>FEATURED ENGAGMENTS</h2>

      <ul
        className="no-scrollbar relative -inset-x-11 flex w-screen flex-row gap-4 overflow-x-auto px-11 pt-16 xl:-inset-x-20"
        ref={contentRef}
        onScroll={updateCustomScrollbar}
      >
        <EngagementItem />
        <EngagementItem />
        <EngagementItem />
        <EngagementItem />
        <EngagementItem />
        <EngagementItem />
      </ul>

      <div className="relative mt-24 h-[2px] w-full bg-stone-800 bg-opacity-25">
        <div
          className="absolute left-0 top-0 h-full bg-stone-800"
          ref={scrollIndicatorRef}
        ></div>
      </div>
    </section>
  );
}

function EngagementItem() {
  return (
    <li className="w-[75vw] flex-shrink-0 md:w-[40vw] lg:w-[30vw]">
      <div className="h-10 w-10 rounded-full bg-stone-800"></div>
      <h3 className="relative mt-8 pt-12 font-bold before:absolute before:top-0 before:block before:h-[2px] before:w-5 before:bg-slate-800">
        CLIENT NAME
      </h3>
      <p className="mt-5 text-sm">
        This is some text about this client. It explains who they are and what I
        did for them.
      </p>
    </li>
  );
}
