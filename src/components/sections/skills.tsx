'use client';
import React from 'react';
import {skillsData} from '@/assets/data';
import useSectionInView from '@/hooks/useSectionInView';
import SectionHeading from '@/components/sections/common/sectionHeading';
import {motion} from 'framer-motion';

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.04 * index,
    },
  }),
};

const Skills: React.FC = () => {
  const {ref} = useSectionInView('Skills');
  return (
    <section
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
      id='skills'
      ref={ref}>
      <SectionHeading>My skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimation}
            initial='initial'
            whileInView='animate'
            viewport={{once: true}}
            custom={index}
            key={index}
            className='rounded-xl border border-black/[0.1] bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80'>
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
