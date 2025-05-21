"use client";
import React, { useState } from "react";
import TransitionLink from "../TransitionLink/TransitionLink";

const ExploreButton = () => {
  return (
    <TransitionLink
      href={"/destinations"}
      className="lg:flex-1 flex items-center  justify-center lg:justify-end lg:items-end w-full relative"
    >
      <div className="rounded-full w-[50%] min-w-[140px] aspect-square bg-white text-dark-blue uppercase font-bellefair flex items-center justify-center cursor-pointer text-2xl sm:text-3xl lg:w-[40%] hover:scale-110 transition-scale duration-500 relative z-2">
        Explore
      </div>
    </TransitionLink>
  );
};

export default ExploreButton;
