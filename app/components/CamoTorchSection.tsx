"use client";

import { useCallback, useRef, useState, type ReactNode } from "react";
import type { StaticImageData } from "next/image";

type CamoTorchSectionProps = {
  children: ReactNode;
  imageSrc: StaticImageData | string;
  className?: string;
  /** Torch radius in px on large screens */
  torchSize?: number;
};

export default function CamoTorchSection({
  children,
  imageSrc,
  className = "",
  torchSize = 280,
}: CamoTorchSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  const src = typeof imageSrc === "string" ? imageSrc : imageSrc.src;

  const onMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden bg-[#222222] ${className}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onMouseMove={onMove}
    >
      {/* Camo layer — revealed by torch mask on lg+ only */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden lg:block bg-cover bg-center opacity-45 transition-[mask-image,-webkit-mask-image] duration-150 ease-out"
        style={{
          backgroundImage: `url(${src})`,
          WebkitMaskImage: active
            ? `radial-gradient(circle ${torchSize}px at ${pos.x}% ${pos.y}%, black 0%, black 35%, transparent 70%)`
            : "radial-gradient(circle 0px at 50% 50%, transparent 0%, transparent 100%)",
          maskImage: active
            ? `radial-gradient(circle ${torchSize}px at ${pos.x}% ${pos.y}%, black 0%, black 35%, transparent 70%)`
            : "radial-gradient(circle 0px at 50% 50%, transparent 0%, transparent 100%)",
        }}
      />

      {/* Soft vignette so torch feels lit against dark */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 z-[1] hidden lg:block transition-opacity duration-300 ${
          active ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(circle ${torchSize * 1.15}px at ${pos.x}% ${pos.y}%, rgba(247,223,140,0.08) 0%, transparent 65%)`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </section>
  );
}
