"use client";
import React from "react";
import useSectionInView from "@/hooks/useSectionInView";
import SectionHeading from "@/components/sections/common/sectionHeading";
import "react-vertical-timeline-component/style.min.css";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import useDeviceParams from "@/hooks/useDeviceParams";
import { cn } from "@/lib/utils";
import { XS_SCREEN } from "@/lib/consts";
import { projectsData } from "@/assets/data";
import { Project } from "@/components/sections/project/project";
import Autoplay from "embla-carousel-autoplay";
import { useTheme } from "@/context/themeContextProvider";

const Projects: React.FC = () => {
  const { ref } = useSectionInView("Projects");
  const { theme } = useTheme();
  const { width } = useDeviceParams();

  const pickImage = (imageLight?: string, imageDark?: string) => {
    if (theme === "light") {
      return imageLight ? imageLight : imageDark ? imageDark : "";
    } else {
      return imageDark ? imageDark : imageLight ? imageLight : "";
    }
  };

  return (
    <section id="projects" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>Projects</SectionHeading>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnMouseEnter: true,
          }),
        ]}
        className={cn("sm:w-[28rem] md:w-[40rem] xl:w-[60rem]")}
      >
        <CarouselContent
          style={{
            width: width < XS_SCREEN ? width / 1.5 : undefined,
          }}
        >
          {projectsData.map((project, index) => {
            if (
              (!project.imageDark && !project.imageLight) ||
              (!project.imageMobileDark && !project.imageMobileLight)
            )
              return null;
            return (
              <Project
                key={index}
                width={width}
                mobileImages={pickImage(
                  project.imageMobileLight,
                  project.imageMobileDark,
                )}
                image={pickImage(project.imageLight, project.imageDark)}
                title={project.title}
                link={project.link}
              />
            );
          })}
        </CarouselContent>
        <CarouselPrevious
          className={cn(width < XS_SCREEN && "-bottom-14 top-[unset] left-0")}
        />
        <CarouselNext
          className={cn(width < XS_SCREEN && "-bottom-14 top-[unset] left-12")}
        />
      </Carousel>
    </section>
  );
};

export default Projects;
