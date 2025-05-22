import React from "react";

const CrewNavigation = (props: {
  index: number;
  crewIndex: number;
  onClick: (index: number) => void;
}) => {
  return (
    <div
      className={`crew-navigation  h-2 lg:h-3 rounded-full cursor-pointer transition-all duration-300 ${
        props.index === props.crewIndex
          ? "bg-white w-4 lg:w-6"
          : "bg-white/20 w-2 lg:w-3"
      }`}
      onClick={() => props.onClick(props.index)}
    ></div>
  );
};

export default CrewNavigation;
