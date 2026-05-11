import { useState } from "react";
import { ExternalLink, Maximize2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { ImageModal } from "@/components/ImageModal";
import { projects, type Project } from "@/lib/portfolio-data";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          subtitle="Click any project to view the actual screenshot in fullscreen."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group glass glass-hover rounded-2xl overflow-hidden flex flex-col"
            >
              <button
                onClick={() => setActive(p)}
                className="relative block aspect-[4/3] w-full overflow-hidden bg-secondary"
                aria-label={`Open ${p.title} preview`}
              >
                <img
                  src={p.preview}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  width={768}
                  height={512}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition">
                  <Maximize2 className="h-3 w-3" /> Preview
                </span>
              </button>

              <div className="p-4 flex-1 flex flex-col">
                <p className="text-[11px] uppercase tracking-wider text-primary">{p.tag}</p>
                <h3 className="mt-1 font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                  {p.description}
                </p>
                {p.link && (
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground hover:scale-[1.03] transition"
                  >
                    {p.link.label} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <ImageModal
        src={active?.full ?? null}
        caption={active?.title}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
