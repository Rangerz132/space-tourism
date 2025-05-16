import React from "react";

const PageTitle = (props: { number: string; title: string }) => {
  return (
    <div className="flex flex-row items-center justify-center space-x-4 font-barlow-condensed uppercase">
      <h5 className="text-white/25 ">{props.number}</h5>
      <h5 className="text-white ">{props.title}</h5>
    </div>
  );
};

export default PageTitle;
