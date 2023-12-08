import React from 'react';

interface ISectionHeading {
  children: React.ReactNode;
}

const SectionHeading: React.FC<ISectionHeading> = ({children}) => {
  return (
    <h2 className='mb-8 text-center text-3xl font-medium capitalize'>
      {children}
    </h2>
  );
};

export default SectionHeading;
