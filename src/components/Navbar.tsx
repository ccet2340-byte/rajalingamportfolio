import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const items = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "gallery", label: "Gallery" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3">
        <button onClick={() => go("home")} className="flex items-center gap-2 font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground neon-ring text-xs">RN</span>
          <span className="hidden sm:inline">Rajalingam<span className="neon-text">.</span></span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => go(it.id)}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition"
            >
              {it.label}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden grid h-9 w-9 place-items-center rounded-lg border border-border bg-white"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-white/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-2 flex flex-col">
            {items.map((it) => (
              <button
                key={it.id}
                onClick={() => go(it.id)}
                className="text-left rounded-lg px-3 py-2 text-sm text-foreground hover:bg-secondary"
              >
                {it.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
