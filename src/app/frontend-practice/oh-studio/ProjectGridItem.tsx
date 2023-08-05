"use client";

import Image from "next/image";
import PlaceholderImage from "./pexels-emilio-gonzález-17781404.jpg";
import { useState } from "react";

export function ProjectGridItem(props: { text: string }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <a
      href="#"
      className="relative flex flex-col gap-2"
      onPointerEnter={() => setIsHovering(true)}
      onPointerLeave={() => setIsHovering(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          className="h-full object-cover"
          src={PlaceholderImage}
          alt="placeholder image"
        />
        <div
          className={`absolute inset-0 bg-gray-500 opacity-0 transition-all duration-500 ${
            isHovering ? "backdrop-blur md:opacity-60" : ""
          }`}
        />
        <div
          className={`absolute right-4 top-4 h-12 w-12 rounded-full bg-white opacity-0 transition-all duration-500 ${
            isHovering
              ? "backdrop-blur-lg md:opacity-100"
              : "-translate-x-4 translate-y-4"
          }`}
        ></div>
      </div>
      <p className="text-sm md:absolute md:inset-4 md:text-white">
        {props.text}
      </p>
    </a>
  );
}
