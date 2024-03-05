import dynamic from "next/dynamic";
import Home from "@/components/sections/home";
import SectionDivider from "@/components/sectionDivider";
import About from "@/components/sections/about";
import React from "react";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";

const Projects = dynamic(() => import("@/components/sections/projects"), {
  ssr: false,
});

const Main: React.FC = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <Home />
      <SectionDivider />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};
export default Main;
