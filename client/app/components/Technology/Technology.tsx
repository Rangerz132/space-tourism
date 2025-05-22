import React from "react";

export type TechnologyType = {
  name: string;
  description: string;
  image: string;
};

const Technology = (props: { technology: TechnologyType }) => {
  return (
    <div className="flex flex-col space-y-8 items-center justify-center text-center lg:justify-start lg:text-left lg:items-start">
      {/** Crew Title */}
      <div className="flex flex-col space-y-2 items-center justify-center font-bellefair uppercase lg:justify-start lg:text-left lg:items-start">
        <h5 className="text-white/25 lg:text-[32px] technology-element">
          The terminology...
        </h5>
        <h4 className="text-white lg:text-[56px] technology-element">
          {props.technology.name}
        </h4>
      </div>
      {/** Crew Biography */}
      <p className="text-light-blue technology-element">
        {props.technology.description}
      </p>
    </div>
  );
};

export default Technology;
