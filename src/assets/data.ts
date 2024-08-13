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
    imageDark: "/images/projects/whiteboard-app/1_dark.png",
    imageMobileDark: "/images/projects/whiteboard-app/1_mobile_dark.png",
    imageLight: "/images/projects/whiteboard-app/1_light.png",
    imageMobileLight: "/images/projects/whiteboard-app/1_mobile_light.png",
    title: "Collaborative Whiteboard",
    link: "https://github.com/procellis33/collaboration-whiteboard",
  },
  {
    imageDark: "/images/projects/calendar-app/pc_dark.png",
    imageMobileDark: "/images/projects/calendar-app/mobile_dark.png",
    imageLight: "/images/projects/calendar-app/pc_light.png",
    imageMobileLight: "/images/projects/calendar-app/mobile_light.png",
    title: "Calendar App",
    link: "https://youtu.be/8XOdtP_wgYQ",
  },
] as const;

export interface IExperiencesData {
  title: string;
  skills: string[];
  description: string;
  icon: ReactNode;
  date: string;
}

export const experiencesData: IExperiencesData[] = [
  {
    title: "Frontend Developer",
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
    title: "Fullstack Developer",
    skills: ["TypeScript", "React Native", "Go", "Redis", "PostgreSQL"],
    description: `The “ErmakDom” application was created with the goal of digitizing the operations of a construction company. In the application, employees have specific roles and functions such as Project Manager, Technical Supervisor, Finance, or Supply. This application allows the company to store the history of past and current construction projects, control the construction process, view progress, manage employees, and more.
       
       Part of my responsibilities were to architect an app structure, work with API and front-end. I translated business logic into app features, staying connected with clients.`,
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Mar 2024",
  },
  {
    title: "Frontend Developer",
    skills: ["TypeScript", "React", "SolidJS"],
    description:
      "I have worked on many frontend projects. I’ve successfully helped clients to create several web/Electron projects from scratch using React and Solid. I also worked on existing projects, ranging from simple landing pages to relatively large applications, where I developed key logic. My tasks varied from improving the UI/UX of pages to writing custom utility libraries.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2024 - Present",
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
