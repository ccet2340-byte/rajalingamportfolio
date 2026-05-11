import { useState } from "react";
import { Mail, Linkedin, Github, Phone, Send } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { links } from "@/lib/portfolio-data";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact — ${form.name}`);
    const body = encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`);
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const channels = [
    { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: links.linkedin },
    { icon: Mail, label: "Email", value: links.email, href: `mailto:${links.email}` },
    { icon: Github, label: "GitHub", value: "View on GitHub", href: links.github },
    { icon: Phone, label: "Phone", value: links.phone, href: `tel:${links.phone.replace(/\s/g, "")}` },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's connect"
          subtitle="Open for internships, UI/UX collaborations and tech conversations."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="grid sm:grid-cols-2 gap-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass glass-hover rounded-2xl p-4 flex items-center gap-3"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{c.label}</p>
                  <p className="text-sm font-medium truncate">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="glass rounded-2xl p-5 space-y-3">
            <div>
              <label className="text-xs font-medium" htmlFor="name">Name</label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full rounded-xl border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs font-medium" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-xl border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-xs font-medium" htmlFor="message">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full rounded-xl border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Tell me about your project or opportunity…"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground neon-ring transition hover:scale-[1.02]"
            >
              <Send className="h-4 w-4" /> {sent ? "Opening email…" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
