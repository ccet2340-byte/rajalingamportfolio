import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Gallery } from "@/components/sections/Gallery";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { FloatingRobot } from "@/components/FloatingRobot";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rajalingam N — AI & DS Student | UI/UX Designer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Rajalingam N — pre-final year B.Tech Artificial Intelligence & Data Science student and UI/UX designer. Projects, skills, achievements and contact.",
      },
      { property: "og:title", content: "Rajalingam N — AI & DS Portfolio" },
      {
        property: "og:description",
        content:
          "Modern futuristic portfolio showcasing AI, UI/UX and design projects by Rajalingam N.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [entered, setEntered] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AnimatePresence>
        {!entered && <Loader key="loader" onEnter={() => setEntered(true)} />}
      </AnimatePresence>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Gallery />
      <Achievements />
      <Contact />
      <Footer />

      {entered && <FloatingRobot />}
    </main>
  );
}
