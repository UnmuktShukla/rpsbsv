"use client";

import { useEffect, useRef, useState } from "react";
import type { StaticImageData } from "next/image";
import EmblemCard from "./EmblemCard";

type Emblem = {
  imageSrc: StaticImageData | string;
  title: string;
  description: string;
  scale: number;
};

type EmblemCarouselProps = {
  items: Emblem[];
};

const AUTO_MS = 3500;

export default function EmblemCarousel({ items }: EmblemCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goTo = (next: number) => {
    const len = items.length;
    setIndex(((next % len) + len) % len);
  };

  useEffect(() => {
    if (paused || items.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, AUTO_MS);

    return () => window.clearInterval(id);
  }, [paused, items.length, index]);

  return (
    <div
      className="relative w-full overflow-visible"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Padding keeps shadow inside the clip box so it isn't cut by hard edges */}
      <div
        className="overflow-x-hidden overflow-y-visible py-6 px-3 -mx-1"
        onTouchStart={(e) => {
          setPaused(true);
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current == null) return;
          const delta = e.changedTouches[0].clientX - touchStartX.current;
          if (delta > 40) goTo(index - 1);
          if (delta < -40) goTo(index + 1);
          touchStartX.current = null;
          window.setTimeout(() => setPaused(false), AUTO_MS);
        }}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.title} className="w-full shrink-0 flex justify-center px-3">
              <EmblemCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
