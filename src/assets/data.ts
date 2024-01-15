import React from 'react';
import {CgWorkAlt} from 'react-icons/cg';
import {LuGraduationCap} from 'react-icons/lu';

export interface ILink {
  name: 'Home' | 'About' | 'Skills' | 'Experience' | 'Contact';
  hash: '#home' | '#about' | '#skills' | '#experience' | '#contact';
}

export const links: readonly ILink[] = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Front-End Engineer',
    skills: ['TypeScript', 'React', 'Redux', 'REST', 'UX', 'Webpack'],
    description:
      'I focused on TypeScript and React, building visual software elements, enhancing user experience, and refactoring legacy code. The project spanned logistics, finance, and included customer management, notifications, and statistics systems.',
    icon: React.createElement(CgWorkAlt),
    date: 'Apr 2021 - Oct 2022',
  },
  {
    title: 'Studying break',
    skills: [],
    description:
      'During my break at CTU FIT, I learned C, Assembler, and computer operations. Expanding further, I tackled DevOps and Big Data, mastering development operations and efficient data handling.',
    icon: React.createElement(LuGraduationCap),
    date: 'Nov 2022 - Apr 2023',
  },
  {
    title: 'Software Engineer',
    skills: [
      'TypeScript',
      'React Native',
      'Redux',
      'REST',
      'UX',
      'Go',
      'Redis',
      'PostgreSQL',
    ],
    description:
      "Currently, I'm working on mobile app. Part of my responsibilities were to architect an app structure, work with API and front-end. I translated business logic into app features, staying connected with clients. Now, I'm integrating client-suggested ideas to enhance the project.",
    icon: React.createElement(CgWorkAlt),
    date: 'May 2023 - Present',
  },
] as const;

export const skillsData: string[] = [
  'HTML',
  'TypeScript',
  'JavaScript',
  'React',
  'React Native',
  'React Router',
  'Next.js',
  'Vite',
  'Webpack',
  'Redux',
  'Redux Saga',
  'CSS',
  'Styled Components',
  'SCSS',
  'Tailwind',
  'Bootstrap',
  'Framer Motion',
  'ESLint',
  'Prettier',
  'Storybook',
  'Figma',
  'Jest',
  'Cypress',
  'Git',
  'GitLab',
  'Redis',
  'PostgreSQL',
  'PL/pgSQL',
  'OracleDB',
  'PL/SQL',
  'Golang',
  'Docker',
  'CI/CD',
  'SonarQube',
  'OpenStack',
  'OpenShift',
  'Jira',
  'REST',
  'GraphQL',
] as const;
