"use client";
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "@/components/sections/common/sectionHeading";
import useSectionInView from "@/hooks/useSectionInView";

const About: React.FC = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I&apos;m Prague based developer with{" "}
        <span className="font-medium">valuable work experience</span> in the
        development sphere. During this time, I had the opportunity to utilize
        my skills to <span className="italic">create</span> and{" "}
        <span className="italic">improve</span> impactful applications for
        people. <span className="italic">My favorite part of programming</span>{" "}
        is the problem-solving aspect. I <span className="underline">love</span>{" "}
        the feeling of finally figuring out a solution to a problem. My core
        stack is <span className="font-medium">TypeScript, React</span>. I am
        currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a front-end
        developer.
      </p>

      <p className="mb-3">
        I&apos;m passionate about{" "}
        <span className="font-medium">staying up-to-date</span> with industry
        trends, driving me to actively engage in{" "}
        <span className="italic">personal projects</span> and{" "}
        <span className="italic">explore new technologies</span> beyond my
        coursework.
      </p>

      <p className="mb-3">
        Beyond just writing lines of code, I{" "}
        <span className="font-medium">find profound satisfaction</span> in
        witnessing the transformative power of my work. Seeing how the
        applications I contribute to evolve and improve with the solutions I
        implement is <span className="italic">genuinely fulfilling</span>.
        Coding <span className="font-medium">isn&apos;t just a task</span> for
        me; <span className="font-medium">it&apos;s a passion</span> that fuels
        my drive to constantly <span className="italic">innovate</span> and{" "}
        <span className="italic">create</span>.
      </p>
    </motion.section>
  );
};

export default About;
