import React from "react";

interface IFooterProps {
  title: string;
}

export const Footer: React.FC<IFooterProps> = ({ title }) => {
  return (
    <div
      className={
        "absolute bottom-0 h-14 w-full bg-gray-600/80 dark:bg-muted/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center"
      }
    >
      <p
        className={
          "inline-block text-sm md:text-md text-center w-full text-white truncate"
        }
      >
        {title}
      </p>
      {/*<p*/}
      {/*  className={*/}
      {/*    "opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate"*/}
      {/*  }*/}
      {/*>*/}
      {/*  {authorLabel}, {createdAtLabel}*/}
      {/*</p>*/}
    </div>
  );
};
