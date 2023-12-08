'use client';
import React from 'react';
import useSectionInView from '@/hooks/useSectionInView';
import SectionHeading from '@/components/sections/common/sectionHeading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {experiencesData} from '@/assets/data';
import {useTheme} from '@/context/themeContextProvider';

const Experience: React.FC = () => {
  const {ref} = useSectionInView('Experience');
  const {theme} = useTheme();
  return (
    <section id='experience' ref={ref} className='mb-28 scroll-mt-28 sm:mb-40'>
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor=''>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible
              contentStyle={{
                background:
                  theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === 'light' ? 'white' : '#24292EFF',
              }}>
              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
                {item.description}
              </p>
              <ul className='mt-2 flex flex-wrap gap-2 text-xs text-gray-800 sm:text-sm lg:text-base'>
                {item.skills.map((skill, index) => (
                  <li
                    key={index}
                    className='rounded-xl border border-black/[0.1] bg-gray-200 px-2 py-2 dark:bg-white/10 dark:text-white/80 lg:px-4'>
                    {skill}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
