import { motion } from "framer-motion";
import { FileText, Play, Mail, Sparkles, ArrowRight } from "lucide-react";
import { links, profile } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-32 sm:pb-24 grid-bg overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid gap-10 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Open to Internship Opportunities
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Hi, I'm <span className="neon-text">Rajalingam N</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground">
            AI &amp; DS Student · UI/UX Designer
          </p>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-muted-foreground">
            Pre-final year B.Tech AI &amp; Data Science student passionate about
            building intelligent, beautifully designed digital experiences —
            blending machine learning with clean UI/UX.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground neon-ring transition hover:scale-[1.03]"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={links.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass glass-hover px-5 py-2.5 text-sm font-medium text-foreground"
            >
              <FileText className="h-4 w-4 text-primary" /> Resume
            </a>
            <a
              href={links.selfIntro}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass glass-hover px-5 py-2.5 text-sm font-medium text-foreground"
            >
              <Play className="h-4 w-4 text-primary" /> Self Intro
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass glass-hover px-5 py-2.5 text-sm font-medium text-foreground"
            >
              <Mail className="h-4 w-4 text-primary" /> Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,theme(colors.blue.300/40),transparent_70%)] blur-2xl" />
          <div className="relative aspect-square w-60 sm:w-72 md:w-80 rounded-3xl glass p-3 neon-ring float">
            <img
              src={profile}
              alt="Rajalingam N profile portrait"
              width={400}
              height={400}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
