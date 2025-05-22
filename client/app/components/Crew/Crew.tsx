import React from "react";

export type CrewType = {
  name: string;
  role: string;
  biography: string;
  image: string;
};
const Crew = (props: { crew: CrewType }) => {
  return (
    <div className="flex flex-col space-y-8 items-center justify-center text-center lg:text-left lg:justify-start lg:items-start">
      {/** Crew Title */}
      <div className="flex flex-col space-y-2 items-center justify-center font-bellefair uppercase lg:justify-start lg:items-start">
        <h5 className="text-white/25 lg:text-[32px] crew-element">
          {props.crew.role}
        </h5>
        <h4 className="text-white lg:text-[56px] crew-element">
          {props.crew.name}
        </h4>
      </div>
      {/** Crew Biography */}
      <p className="text-light-blue crew-element">{props.crew.biography}</p>
    </div>
  );
};

export default Crew;
