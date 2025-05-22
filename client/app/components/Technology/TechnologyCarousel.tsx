"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TechnologyNavigation from "./TechnologyNavigation";
import Technology, { TechnologyType } from "./Technology";
import {
  animateInVerticalElement,
  animateInVerticalSwipeElement,
  animateOutVerticalElement,
  animateOutVerticalSwipeElement,
} from "../../utils/animations";

const TechnologyCarousel = (props: { technologies: TechnologyType[] }) => {
  const [technologyIndex, setTechnologyIndex] = useState<number>(0);

  useEffect(() => {
    animateInVerticalElement(".technology-element", 1, 0.3);
    animateOutVerticalSwipeElement(".technology-swipe-element", 1, 0.3);
  }, []);

  const handleCarouselOnChange = async (index: number) => {
    await Promise.all([
      animateOutVerticalElement(".technology-element", 1, 0.3),
      animateInVerticalSwipeElement(".technology-swipe-element", 1, 0.3),
    ]);

    setTechnologyIndex(index);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        Promise.all([
          animateInVerticalElement(".technology-element", 1, 0.3),
          animateOutVerticalSwipeElement(".technology-swipe-element", 1, 0.3),
        ]);
      });
    });
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-12 section-content lg:flex-row lg:space-y-0 w-full">
      {/* Small screen image */}
      <div className="w-full h-60 sm:h-80 overflow-hidden flex items-center justify-center lg:hidden">
        <Image
          src={props.technologies[technologyIndex].image}
          width={600}
          height={600}
          alt={props.technologies[technologyIndex].name}
          className="w-full"
        />
        <div className="absolute bg-white h-0 w-full bottom-0 technology-swipe-element"></div>
      </div>

      {/* Main content with navigation and image */}
      <div className="flex flex-col lg:flex-row items-start w-full relative ">
        <div className="second-container lg:flex lg:justify-start lg:items-center lg:space-x-12 lg:flex-1">
          {/* Navigation */}
          <div className="flex flex-row space-x-6 items-center justify-center lg:flex-col lg:space-x-0 lg:space-y-6 pb-12 lg:pb-0 ">
            {props.technologies.map((_, index) => (
              <TechnologyNavigation
                key={index}
                index={index}
                currentIndex={technologyIndex}
                onClick={() => handleCarouselOnChange(index)}
              />
            ))}
          </div>

          {/* Technology Content */}
          <div className="lg:w-[40%] ">
            <Technology technology={props.technologies[technologyIndex]} />
          </div>
        </div>
        {/* Tehcnology Image Large Screen */}
        <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-[50%] w-[30%]">
          <Image
            src={props.technologies[technologyIndex].image}
            width={600}
            height={600}
            alt={props.technologies[technologyIndex].name}
            className="w-full h-auto object-contain"
          />
          <div className="absolute bg-white h-full w-full bottom-0 technology-swipe-element"></div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCarousel;
