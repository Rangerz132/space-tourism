"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DestinationNavigation from "./DestinationNavigation";
import Destination, { DestinationType } from "./Destination";
import gsap from "gsap";
import {
  animateInHorizontalElement,
  animateInVerticalElement,
  animateOutVerticalElement,
} from "../../utils/animations";

const DestinationCarousel = (props: { destinations: DestinationType[] }) => {
  const [destinationIndex, setDestinationIndex] = useState<number>(0);

  useEffect(() => {
    animateInHorizontalElement(".destination-navigation", 0.5, 0.2);
    animateInDestinationImage();
  }, []);

  const handleCarouselOnChange = async (index: number) => {
    await Promise.all([
      animateOutDestinationImage(),
      animateOutVerticalElement(".destination-element", 1, 0.3),
    ]);

    setDestinationIndex(index);

    // Wait for the DOM to update and new elements to render
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        Promise.all([
          animateInDestinationImage(),
          animateInVerticalElement(".destination-element", 1, 0.3),
        ]);
      });
    });
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-20 lg:flex-row lg:space-x-12 lg:space-y-0 section-content">
      {/** Destination Image */}
      <div className="w-full flex items-center justify-center lg:flex-1 overflow-hidden">
        <Image
          src={props.destinations[destinationIndex].image}
          width={600}
          height={600}
          alt={props.destinations[destinationIndex].name}
          id="destination-image"
          className="sm:w-[40%] aspect-square lg:w-[80%]"
        />
      </div>
      <div className="md:flex-1 space-y-12">
        {/** Destination Navigation */}
        <div className="flex flex-row items-center justify-center space-x-6 lg:justify-start">
          {props.destinations.map((destination, index) => (
            <DestinationNavigation
              key={index}
              index={index}
              name={destination.name}
              currentIndex={destinationIndex}
              onClick={() => handleCarouselOnChange(index)}
            />
          ))}
        </div>
        {/** Destination Content */}
        <Destination
          name={props.destinations[destinationIndex].name}
          description={props.destinations[destinationIndex].description}
          distance={props.destinations[destinationIndex].averageDistance}
          travelTime={props.destinations[destinationIndex].travelTime}
        />
      </div>
    </div>
  );
};

export default DestinationCarousel;

const animateInDestinationImage = (): Promise<void> => {
  return new Promise((resolve) => {
    gsap.fromTo(
      "#destination-image",
      { rotate: 180, opacity: 0 },
      {
        rotate: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        onComplete: () => resolve(),
      }
    );
  });
};

const animateOutDestinationImage = (): Promise<void> => {
  return new Promise((resolve) => {
    gsap.fromTo(
      "#destination-image",
      { rotate: 0, opacity: 1 },
      {
        rotate: -180,
        opacity: 0,
        duration: 1,
        ease: "power2.in",
        onComplete: () => resolve(),
      }
    );
  });
};
