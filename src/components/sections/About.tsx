import { GraduationCap, MapPin, Briefcase, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const items = [
  {
    icon: GraduationCap,
    title: "Education",
    body: "B.Tech – Artificial Intelligence & Data Science (2023 – Present) · Chettinad College of Engineering & Technology, Karur.",
  },
  {
    icon: Sparkles,
    title: "CGPA",
    body: "8.45 (Up to 5th Semester). 12th: 92% – School First. 11th: 82% – School First.",
  },
  {
    icon: Briefcase,
    title: "Internship",
    body: "MERN Stack Internship Training at IBM (Jul – Sep 2025): hands-on MongoDB, Express, React, Node.js.",
  },
  {
    icon: MapPin,
    title: "Interests",
    body: "AI, Deep Learning, UI/UX design, building products that solve real-world problems.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="About Me"
          title="A quick introduction"
          subtitle="Motivated, curious, and eager to apply technical and design skills to real-world projects."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="glass glass-hover rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
