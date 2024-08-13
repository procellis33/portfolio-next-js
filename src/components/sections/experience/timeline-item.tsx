import type React from "react";
import { IExperiencesData } from "@/assets/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface TimelineItemProps {
  item: IExperiencesData;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h3 className="font-semibold capitalize text-lg">{item.title}</h3>
      <div className={"flex flex-col"}>
        <p
          className={cn(
            "!mt-1 !font-normal text-gray-700 dark:text-white/75 whitespace-pre-line",
            !isOpen && "h-20 overflow-hidden",
          )}
        >
          {item.description}
        </p>
        <Button
          onClick={() => setIsOpen((prev) => !prev)}
          variant={"outline"}
          className={
            "self-end text-xs md:text-sm p-1.5 md:p-2 md:px-3 px-2 h-fit my-2 gap-2"
          }
        >
          {isOpen ? "Show less" : "Show more"}
          <ChevronDown className={cn(isOpen && "rotate-180")} size={18} />
        </Button>
      </div>
      <ul className="mt-1 flex flex-wrap gap-2 text-xs text-gray-800 sm:text-sm lg:text-base">
        {item.skills.map((skill, index) => (
          <li
            key={index}
            className="rounded-md md:rounded-xl border border-black/[0.1] bg-gray-200 px-2 py-2 dark:bg-white/10 dark:text-white/80 lg:px-4"
          >
            {skill}
          </li>
        ))}
      </ul>
    </>
  );
};

export { TimelineItem };
