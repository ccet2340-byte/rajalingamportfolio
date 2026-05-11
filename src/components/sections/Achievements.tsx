import { SectionHeader } from "@/components/SectionHeader";
import { Trophy } from "lucide-react";
import { achievements } from "@/lib/portfolio-data";

export function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Achievements"
          title="Recognitions & awards"
          subtitle="A few highlights from competitions, hackathons, and academics."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <article key={i} className="glass glass-hover rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] w-full overflow-hidden bg-secondary">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <h3 className="font-semibold text-sm">{a.title}</h3>
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground">{a.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
