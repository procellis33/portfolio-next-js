"use client";
import React, { createContext, useState } from "react";
import { IActiveSection } from "@/types/activeSection";

interface IActiveSectionContextProvider {
  children: React.ReactNode;
}

interface IActiveSectionContext {
  activeSection: IActiveSection;
  setActiveSection: React.Dispatch<React.SetStateAction<IActiveSection>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = createContext<null | IActiveSectionContext>(
  null,
);

const ActiveSectionContextProvider: React.FC<IActiveSectionContextProvider> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState<IActiveSection>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};
export default ActiveSectionContextProvider;
