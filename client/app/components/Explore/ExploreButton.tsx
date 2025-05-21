"use client";
import React, { useEffect } from "react";
import TransitionLink from "../TransitionLink/TransitionLink";
import gsap from "gsap";

const ExploreButton = () => {
  useEffect(() => {
    animateIn();
  }, []);

  return (
    <TransitionLink
      href={"/destinations"}
      className="lg:flex-1 flex items-center justify-center lg:justify-end lg:items-end w-full relative explore-button"
    >
      <div className="rounded-full w-[50%] min-w-[140px] aspect-square bg-white text-dark-blue uppercase font-bellefair flex items-center justify-center cursor-pointer text-2xl sm:text-3xl lg:w-[40%] hover:scale-110 transition-scale duration-500 relative z-2 right-0">
        Explore
      </div>
    </TransitionLink>
  );
};

export default ExploreButton;

const animateIn = () => {
  gsap.fromTo(
    ".explore-button",
    { duration: 0, opacity: 0, ease: "sine.inOut" },
    { duration: 1, opacity: 1, ease: "sine.inOut" }
  );
};
