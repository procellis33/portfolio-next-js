import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { CarouselItem } from "@/components/ui/carousel";
import React from "react";
import { XS_SCREEN } from "@/lib/consts";
import { Overlay } from "@/components/sections/project/overlay";
import { Footer } from "@/components/sections/project/footer";

interface IProject {
  width: number;
  mobileImages: string;
  image: string;
  title: string;
  link: string;
}

export const Project: React.FC<IProject> = ({
  width,
  image,
  mobileImages,
  title,
  link,
}) => {
  return (
    <CarouselItem className={"bg-white dark:bg-white/10"}>
      <a href={link}>
        <div
          className={
            "group rounded-md border border-black/[0.1] bg-white dark:bg-white/10 dark:text-white/80 sm:w-[28rem] md:w-[40rem] xl:w-[60rem]"
          }
          style={{
            width: width < XS_SCREEN ? width / 1.5 : undefined,
          }}
        >
          <AspectRatio ratio={width < XS_SCREEN ? 9 / 16 : 16 / 9}>
            <Image
              src={width < XS_SCREEN ? mobileImages : image}
              alt={title}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 448px, (max-width: 1280px) 640px, 960px"
              quality={80}
              fill
              loading={"lazy"}
              className={"rounded-md object-cover"}
            />
            <Footer title={title} />
            <Overlay />
          </AspectRatio>
        </div>
      </a>
    </CarouselItem>
  );
};
