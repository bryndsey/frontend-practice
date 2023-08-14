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
    <section className="overflow-visible p-10 md:p-16 xl:p-20" ref={sectionRef}>
      <h2>FEATURED ENGAGMENTS</h2>

      {/* TODO: Don't hardcode the margin offset to account for padding - have it be calculated instead */}
      <ul
        className="no-scrollbar relative -mx-10 flex w-screen flex-row gap-4 overflow-x-auto px-10 pt-16 md:-mx-16 md:px-16 xl:-mx-20 xl:px-20"
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

      <div className="bg-content relative mt-24 h-[2px] w-full bg-opacity-25">
        <div
          className="bg-content absolute left-0 top-0 h-full"
          ref={scrollIndicatorRef}
        ></div>
      </div>
    </section>
  );
}

function EngagementItem() {
  return (
    <li className="w-[75vw] flex-shrink-0 md:w-[40vw] lg:w-[30vw]">
      <div className="bg-content h-10 w-10 rounded-full"></div>
      <h3 className="before:bg-content relative mt-8 pt-12 font-bold before:absolute before:top-0 before:block before:h-[2px] before:w-5">
        CLIENT NAME
      </h3>
      <p className="mt-5 text-sm">
        This is some text about this client. It explains who they are and what I
        did for them.
      </p>
    </li>
  );
}
