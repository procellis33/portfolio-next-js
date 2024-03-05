import React, { ReactNode } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export interface ILink {
  name: "Home" | "About" | "Skills" | "Experience" | "Projects" | "Contact";
  hash:
    | "#home"
    | "#about"
    | "#skills"
    | "#experience"
    | "#projects"
    | "#contact";
}

export const links: readonly ILink[] = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

interface IProjectsData {
  imageDark?: string;
  imageMobileDark?: string;
  imageLight?: string;
  imageMobileLight?: string;
  title: string;
  link: string;
}

export const projectsData: IProjectsData[] = [
  {
    imageDark: "/images/projects/1_dark.png",
    imageMobileDark: "/images/projects/1_mobile_dark.png",
    imageLight: "/images/projects/1_light.png",
    imageMobileLight: "/images/projects/1_mobile_light.png",
    title: "Collaborative Whiteboard",
    link: "https://github.com/procellis33/collaboration-whiteboard",
  },
] as const;

interface IExperiencesData {
  title: string;
  skills: string[];
  description: string;
  icon: ReactNode;
  date: string;
}

export const experiencesData: IExperiencesData[] = [
  {
    title: "Front-End Engineer",
    skills: ["TypeScript", "React"],
    description:
      "Initially, I accumulated experience within the team by completing simple tasks such as adding new components and fixing bugs. Subsequently, I progressed to handling more challenging assignments, including the creation of crucial components with key logic, refactoring legacy code, optimizing the application, engaging in code reviews, and occasionally participating in technical interviews.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2021 - Oct 2022",
  },
  {
    title: "Professional development",
    skills: [],
    description:
      "During my break at CTU FIT, I learned fundamentals such as C, C++, Assembler, computer logic, advanced data structures, efficient data handling and the architecture of computers. Later, I delved into DevOps and different databases.",
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2022 - May 2023",
  },
  {
    title: "Software Engineer",
    skills: ["TypeScript", "React Native", "Go", "Redis", "PostgreSQL"],
    description:
      "Currently, I'm working on mobile app. Part of my responsibilities were to architect an app structure, work with API and front-end. I translated business logic into app features, staying connected with clients. Now, I'm integrating client-suggested ideas to enhance the project.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Present",
  },
] as const;

export const skillsData: string[] = [
  "HTML",
  "TypeScript",
  "JavaScript",
  "React",
  "React Native",
  "React Router",
  "Next.js",
  "Vite",
  "Webpack",
  "Redux",
  "Zustand",
  "Redux Saga",
  "CSS",
  "shadcn/ui",
  "Styled Components",
  "SCSS",
  "Tailwind",
  "Bootstrap",
  "Framer Motion",
  "ESLint",
  "Prettier",
  "Storybook",
  "Figma",
  "Jest",
  "Cypress",
  "Convex",
  "Clerk",
  "Liveblocks",
  "Git",
  "GitLab",
  "Redis",
  "PostgreSQL",
  "PL/pgSQL",
  "OracleDB",
  "PL/SQL",
  "Golang",
  "Docker",
  "CI/CD",
  "SonarQube",
  "OpenStack",
  "OpenShift",
  "Jira",
  "REST",
  "GraphQL",
] as const;
