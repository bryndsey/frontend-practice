"use client";

import { useEffect } from "react";
import { LinkButton } from "../components/LinkButton";
import { useInView } from "@react-spring/web";
import Image from "next/image";
import placeholderImage from "@assets/pexels-emilio-gonzález-17781404.jpg";

export function SpotlightSection() {
  const [sectionRef, inView] = useInView({
    amount: 0.5,
  });

  useEffect(() => {
    const root = document.getElementById("basic-dept-root");
    if (root === null) return;
    if (inView) {
      root.style.setProperty("--color-content", "249 205 205");
      root.style.setProperty("--color-backdrop", "37 36 34");
    } else {
      root.style.setProperty("--color-content", "37 36 34");
      root.style.setProperty("--color-backdrop", "244 244 244");
    }
  }, [inView]);

  return (
    <section
      className="flex flex-col-reverse items-start gap-2 p-10 md:grid md:grid-cols-2 md:p-16 xl:gap-16 xl:p-20"
      ref={sectionRef}
    >
      <div className="sticky top-28 flex flex-col items-start gap-6">
        <q className="text-5xl font-bold xl:text-7xl">
          BRYAN/LINZ® HELPS BRANDS ● CONNECT W/ CULTURE
        </q>
        <p>
          NOBODY <b>SAID THAT</b>
        </p>
        <LinkButton>ABOUT US</LinkButton>
      </div>
      <Image
        className="aspect-[3/4] w-full object-cover"
        src={placeholderImage}
        alt="placeholder image"
      />
    </section>
  );
}
