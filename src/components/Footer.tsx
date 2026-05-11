import { links } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Rajalingam N. Crafted with care.</p>
        <div className="flex items-center gap-4">
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href={`mailto:${links.email}`} className="hover:text-foreground">Email</a>
          <a href={links.figma} target="_blank" rel="noreferrer" className="hover:text-foreground">Figma</a>
        </div>
      </div>
    </footer>
  );
}
