"use client";
import React, { useState } from "react";

const TechnologyNavigation = (props: {
  index: number;
  currentIndex: number;
  onClick: (index: number) => void;
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className={`rounded-full border border-white/25 aspect-square cursor-pointer w-12 h-12 flex items-center justify-center transition-all duration-300 sm:text-2xl sm:w-16 sm:h-16 ${
        props.index === props.currentIndex || isHover
          ? "text-dark-blue bg-white"
          : "text-white bg-transparent"
      }`}
      onClick={() => props.onClick(props.index)}
      onPointerEnter={() => setIsHover(true)}
      onPointerLeave={() => setIsHover(false)}
    >
      {props.index + 1}
    </div>
  );
};

export default TechnologyNavigation;
