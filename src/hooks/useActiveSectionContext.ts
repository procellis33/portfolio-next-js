import {useContext} from 'react';
import {ActiveSectionContext} from '@/context/activeSectionContextProvider';

const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null)
    throw new Error(
      'useActiveSectionContext must be used within a ActiveSectionContextProvider'
    );

  return context;
};

export default useActiveSectionContext;
