import React from "react";

export type TechnologyType = {
  name: string;
  description: string;
  image: string;
};

const Technology = (props: { technology: TechnologyType }) => {
  return (
    <div className="flex flex-col space-y-8 items-center justify-center text-center">
      {/** Crew Title */}
      <div className="flex flex-col space-y-2 items-center justify-center font-bellefair uppercase">
        <h5 className="text-white/25 ">The terminology...</h5>
        <h4 className="text-white ">{props.technology.name}</h4>
      </div>
      {/** Crew Biography */}
      <p className="text-light-blue ">{props.technology.description}</p>
    </div>
  );
};

export default Technology;
