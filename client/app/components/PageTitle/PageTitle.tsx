import React, { useEffect } from "react";
import gsap from "gsap";

const PageTitle = (props: { number: string; title: string }) => {
  useEffect(() => {
    animatePageTitle();
  }, []);

  return (
    <div className="flex flex-row items-center justify-center space-x-4 font-saira-condensed tracking-wide-4 uppercase sm:justify-start">
      <h5 className="text-white/25 font-bold sm:text-xl tracking-wide-4 pageTitle">
        {props.number}
      </h5>
      <h5 className="text-white sm:text-xl tracking-wide-4 pageTitle">
        {props.title}
      </h5>
    </div>
  );
};

export default PageTitle;

const animatePageTitle = () => {
  gsap.fromTo(
    ".pageTitle",
    { duration: 0, x: -20, opacity: 0, ease: "sine.out" },
    { duration: 1, x: 0, opacity: 1, stagger: 0.2, ease: "sine.out" }
  );
};
