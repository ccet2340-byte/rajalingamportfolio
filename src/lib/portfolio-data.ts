import profile from "@/assets/profile.jpg";

// Project previews (AI-generated)
import previewFoodguard from "@/assets/previews/foodguard.jpg";
import previewRicemill from "@/assets/previews/ricemill.jpg";
import previewRobot from "@/assets/previews/robot.jpg";
import previewFigma from "@/assets/previews/figma.jpg";
import previewCanva from "@/assets/previews/canva.jpg";
import previewPhotopea from "@/assets/previews/photopea.jpg";
import previewWireframe from "@/assets/previews/wireframe.jpg";

// Real uploaded images
import foodguard from "@/assets/projects/foodguard.jpg";
import robot from "@/assets/projects/robot.jpg";
import ricemillUI from "@/assets/projects/ricemill-ui.jpg";
import canvaPoster from "@/assets/projects/canva-poster.jpg";
import photopeaPoster from "@/assets/projects/photopea-poster.jpg";
import wireframe from "@/assets/projects/wireframe.jpg";

import gallery1 from "@/assets/gallery/ricemill-1.jpg";
import gallery2 from "@/assets/gallery/ricemill-2.jpg";
import gallery3 from "@/assets/gallery/ricemill-3.jpg";
import gallery4 from "@/assets/gallery/ricemill-4.jpg";

import achHackathon from "@/assets/achievements/hackathon.jpg";
import achPlaque from "@/assets/achievements/award-plaque.jpg";
import achKbf from "@/assets/achievements/kbf-2023.jpg";

export const links = {
  resume: "https://bit.ly/4uaJShe",
  selfIntro: "https://bit.ly/4uFVgkU",
  linkedin:
    "https://www.linkedin.com/in/rajalingam-narayanakumar-578a69348",
  github: "https://github.com/",
  figma: "https://twine-pure-42838145.figma.site/",
  email: "rajggulyadhavr@gmail.com",
  phone: "+91 9791703480",
};

export { profile };

export const skills = [
  { name: "Python", icon: "🐍" },
  { name: "Front-End", icon: "💻" },
  { name: "UI/UX", icon: "🎨" },
  { name: "Figma", icon: "🧩" },
  { name: "Canva", icon: "🖌️" },
  { name: "Photopea", icon: "🖼️" },
  { name: "MySQL", icon: "🗄️" },
  { name: "Power BI", icon: "📊" },
  { name: "MS Office", icon: "📄" },
];

export type Project = {
  id: string;
  title: string;
  tag: string;
  preview: string;
  full: string;
  description: string;
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    id: "foodguard",
    title: "FoodGuard AI",
    tag: "Deep Learning · Healthcare",
    preview: previewFoodguard,
    full: foodguard,
    description:
      "Deep-learning based diabetic foot ulcer detection with an integrated medical assistant chatbot.",
  },
  {
    id: "ricemill",
    title: "Rice Mill Ecommerce UI",
    tag: "UI/UX · Figma Prototype",
    preview: previewRicemill,
    full: ricemillUI,
    description:
      "Responsive e-commerce website UI designed in Figma for a traditional local rice & flour mill business.",
    link: { label: "View Figma Project", href: "https://twine-pure-42838145.figma.site/" },
  },
  {
    id: "robot",
    title: "Autonomous Service Robot",
    tag: "Robotics · Hardware",
    preview: previewRobot,
    full: robot,
    description:
      "Service robot prototype designed to autonomously deliver items in cafés and offices.",
  },
  {
    id: "figma",
    title: "Figma UI Project",
    tag: "Prototype · Design",
    preview: previewFigma,
    full: ricemillUI,
    description:
      "Interactive Figma prototype showcasing modern mobile-first UI patterns.",
    link: { label: "Open Figma Prototype", href: "https://twine-pure-42838145.figma.site/" },
  },
  {
    id: "canva",
    title: "Canva Poster",
    tag: "Graphic Design",
    preview: previewCanva,
    full: canvaPoster,
    description:
      "Brand poster designed in Canva for Sri Rajalingam Rice Mill business promotion.",
  },
  {
    id: "photopea",
    title: "Photopea Poster",
    tag: "Photo Editing",
    preview: previewPhotopea,
    full: photopeaPoster,
    description:
      "School admission promotional poster designed using the Photopea tool.",
  },
  {
    id: "wireframe",
    title: "Wireframe Design",
    tag: "UX · Figma",
    preview: previewWireframe,
    full: wireframe,
    description:
      "Personal portfolio website wireframe planned in Figma before high-fidelity design.",
  },
];

export const gallery = [
  { src: gallery1, caption: "Rice Mill UI · Services" },
  { src: gallery2, caption: "Rice Mill UI · About" },
  { src: gallery3, caption: "Rice Mill UI · Contact" },
  { src: gallery4, caption: "Rice Mill UI · Products" },
  { src: canvaPoster, caption: "Canva Brand Poster" },
  { src: photopeaPoster, caption: "Photopea School Poster" },
];

export const achievements = [
  {
    image: achHackathon,
    title: "3rd Prize · National Hackathon",
    caption: "VCET, Madurai — National Level Hackathon",
  },
  {
    image: achPlaque,
    title: "Award Recognition",
    caption: "Group recognition at college event",
  },
  {
    image: achKbf,
    title: "Runner-up · Youth Indians",
    caption: "Round Table — Accessibility & Health Talk (KBF 2023)",
  },
  {
    image: achHackathon,
    title: "Tamil Nadu Govt. Award",
    caption: "Centum in Computer Science (12th Std)",
  },
  {
    image: achPlaque,
    title: "School First — 12th",
    caption: "92% · Govt. Higher Secondary School, Ayyarmalai",
  },
];
