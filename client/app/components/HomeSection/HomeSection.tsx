"use client";
import React, { useEffect } from "react";

import { animateInVerticalElement } from "../../utils/animations";

export type HeroSectionType = {
  title: string;
  subtitle: string;
  content: string;
};

const HomeSection = (props: { data: HeroSectionType }) => {
  useEffect(() => {
    animateInVerticalElement(".home-element", 1.5, 0.5);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 text-center lg:text-left lg:items-start lg:justify-start lg:flex-1">
      {/** Subtitle */}
      <h5 className="text-light-blue  uppercase lg:text-left font-saira-condensed tracking-wide-4 home-element">
        {props.data.subtitle}
      </h5>
      {/** Title */}
      <h1 className="text-white font-bellefair uppercase lg:text-left home-element">
        {props.data.title}
      </h1>
      {/** Content */}
      <p className="font-barlow text-light-blue lg:text-left home-element">
        {props.data.content}
      </p>
    </div>
  );
};

export default HomeSection;
