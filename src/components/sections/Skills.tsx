import { SectionHeader } from "@/components/SectionHeader";
import { skills } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Skills"
          title="Tools & technologies"
          subtitle="A mix of AI, front-end, and design tooling I use to ship clean projects."
        />
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {skills.map((s) => (
            <div
              key={s.name}
              className="glass glass-hover rounded-2xl p-4 text-center"
            >
              <div className="text-2xl">{s.icon}</div>
              <p className="mt-2 text-sm font-medium">{s.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
