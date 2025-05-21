"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

export type HeroSectionType = {
  title: string;
  subtitle: string;
  content: string;
};

const HomeSection = (props: { data: HeroSectionType }) => {
  useEffect(() => {
    animateHomeContent();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 text-center lg:text-left lg:items-start lg:justify-start lg:flex-1">
      {/** Subtitle */}
      <h5 className="text-light-blue  uppercase lg:text-left font-saira-condensed tracking-wide-4 home-content">
        {props.data.subtitle}
      </h5>
      {/** Title */}
      <h1 className="text-white font-bellefair uppercase lg:text-left home-content">
        {props.data.title}
      </h1>
      {/** Content */}
      <p className="font-barlow text-light-blue lg:text-left home-content">
        {props.data.content}
      </p>
    </div>
  );
};

export default HomeSection;

const animateHomeContent = () => {
  gsap.fromTo(
    ".home-content",
    { duration: 0, y: 20, opacity: 0, ease: "sine.out" },
    {
      duration: 1,
      y: 0,
      opacity: 1,
      delay: 0.5,
      stagger: 0.2,
      ease: "sine.out",
    }
  );
};
