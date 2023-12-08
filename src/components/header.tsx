'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {links} from '@/assets/data';
import Link from 'next/link';
import clsx from 'clsx';
import useActiveSectionContext from '@/hooks/useActiveSectionContext';

const Header: React.FC = () => {
  const {activeSection, setActiveSection, setTimeOfLastClick} =
    useActiveSectionContext();
  console.log(activeSection);

  return (
    <header className='relative z-[999]'>
      <motion.div
        className='fixed left-1/2 top-0 h-[6rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75 sm:top-5 sm:h-[3.25rem] sm:w-[31rem] sm:rounded-full'
        initial={{y: -100, x: '-50%', opacity: 0}}
        animate={{y: 0, x: '-50%', opacity: 1}}></motion.div>
      <nav className='fixed left-1/2 top-[0.15rem] flex h-[4rem] -translate-x-1/2 py-2 sm:top-[1.5rem] sm:h-[initial] sm:py-0'>
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {links.map(link => (
            <motion.li
              key={link.hash}
              className='relative flex h-3/4 items-center justify-center'
              initial={{y: -100, opacity: 0}}
              animate={{y: 0, opacity: 1}}>
              <Link
                href={link.hash}
                className={clsx(
                  'flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300',
                  {
                    'text-gray-950 dark:text-white':
                      activeSection === link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now);
                }}>
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className='absolute inset-0 -z-10 rounded-full bg-[#EEEFF3FF] dark:bg-gray-800'
                    layoutId='activeSection'
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;