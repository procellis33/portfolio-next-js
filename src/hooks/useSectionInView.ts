import {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';
import useActiveSectionContext from '@/hooks/useActiveSectionContext';
import {IActiveSection} from '@/types/activeSection';

type TUseSectionInView = (sectionName: IActiveSection) => {
  ref: (node?: Element | null | undefined) => void;
};

const useSectionInView: TUseSectionInView = sectionName => {
  let threshold = 0.8; // Default threshold for server-side rendering

  if (typeof window !== 'undefined') {
    threshold =
      window.innerWidth < 600 || window.innerHeight < 700
        ? window.innerWidth < 450 || window.innerHeight < 700
          ? 0.4
          : 0.6
        : 0.75;
  }

  const {ref, inView} = useInView({
    threshold,
  });
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
};

export default useSectionInView;
