"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Crew, { CrewType } from "./Crew";
import {
  animateInVerticalElement,
  animateOutVerticalElement,
} from "../../utils/animations";
import CrewNavigation from "./CrewNavigation";

const CrewCarousel = (props: { crew: CrewType[] }) => {
  const [crewIndex, setCrewIndex] = useState<number>(0);

  useEffect(() => {
    animateInVerticalElement(".crew-element", 1, 0.3);
  }, []);

  const handleCarouselOnChange = async (index: number) => {
    await Promise.all([animateOutVerticalElement(".crew-element", 1, 0.3)]);

    setCrewIndex(index);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        Promise.all([animateInVerticalElement(".crew-element", 1, 0.3)]);
      });
    });
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 second-container lg:flex-row lg:justify-between  sm:space-y-0 section-content ">
      <div className="flex-1 flex flex-col space-y-12 lg:space-y-30">
        {/** Crew Details */}
        {props.crew.length > 0 && <Crew crew={props.crew[crewIndex]} />}
        {/** Crew navigation */}
        {props.crew.length > 0 && (
          <div className="flex flex-row items-center justify-center space-x-4 lg:space-x-8 lg:justify-start">
            {props.crew.map((crewMember, index) => (
              <CrewNavigation
                key={crewMember.name}
                index={index}
                crewIndex={crewIndex}
                onClick={() => handleCarouselOnChange(index)}
              />
            ))}
          </div>
        )}
      </div>

      {/** Crew Image */}
      <div className="flex-1 lg:flex lg:justify-end crew-element">
        {props.crew.length > 0 && (
          <Image
            className="w-[60vw] sm:w-[40vw] lg:w-[25vw]"
            src={props.crew[crewIndex].image}
            width={600}
            height={600}
            alt={props.crew[crewIndex].name}
          />
        )}
      </div>
    </div>
  );
};

export default CrewCarousel;
