import React from "react";

const PageTitle = (props: { number: string; title: string }) => {
  return (
    <div className="flex flex-row items-center justify-center space-x-4 font-barlow-condensed uppercase sm:justify-start">
      <h5 className="text-white/25 font-bold sm:text-xl">{props.number}</h5>
      <h5 className="text-white sm:text-xl">{props.title}</h5>
    </div>
  );
};

export default PageTitle;
