"use client";
import React, { useState } from "react";

const DestinationNavigation = (props: {
  index: number;
  name: string;
  currentIndex: number;
  onClick: (index: number) => void;
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      key={props.index}
      className={`text-light-blue uppercase pb-2 border-b font-saira-condensed tracking-wide-4 cursor-pointer transition-all duration-300 ${
        props.index === props.currentIndex || isHover
          ? "border-b-white"
          : "border-b-transparent"
      }`}
      onClick={() => props.onClick(props.index)}
      onPointerEnter={() => setIsHover(true)}
      onPointerLeave={() => setIsHover(false)}
    >
      {props.name}
    </div>
  );
};

export default DestinationNavigation;
