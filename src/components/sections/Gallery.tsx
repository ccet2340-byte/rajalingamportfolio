import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { ImageModal } from "@/components/ImageModal";
import { gallery } from "@/lib/portfolio-data";

export function Gallery() {
  const [active, setActive] = useState<{ src: string; caption: string } | null>(null);
  return (
    <section id="gallery" className="py-20 sm:py-24 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Gallery"
          title="Posters, UI screens & wireframes"
          subtitle="Tap any image to zoom in."
        />
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
          {gallery.map((g, i) => (
            <button
              key={i}
              onClick={() => setActive(g)}
              className="group relative aspect-square overflow-hidden rounded-2xl glass glass-hover"
              aria-label={`Zoom ${g.caption}`}
            >
              <img
                src={g.src}
                alt={g.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-left text-[11px] sm:text-xs text-white opacity-0 group-hover:opacity-100 transition">
                {g.caption}
              </span>
            </button>
          ))}
        </div>
      </div>
      <ImageModal src={active?.src ?? null} caption={active?.caption} onClose={() => setActive(null)} />
    </section>
  );
}
