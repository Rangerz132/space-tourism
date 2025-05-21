import React from "react";

const Destination = (props: {
  name: string;
  description: string;
  distance: string;
  travelTime: string;
}) => {
  return (
    <div className="flex flex-col space-y-6 justify-center font-bellefair ">
      {/** Content */}
      <div className=" flex flex-col space-y-6 text-center lg:text-left">
        <h2 className="text-white uppercase">{props.name}</h2>
        <p className="text-light-blue">{props.description}</p>
      </div>
      {/** Border */}
      <div className="w-full h-[0.1px] bg-grey"></div>
      {/** Stats */}
      <div className="flex flex-col items-center justify-center space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6 ">
        {/** Stat Distance */}
        <div className="destination-stat-container sm:flex-1">
          <h5 className="text-light-blue font-saira-condensed tracking-wide-4">
            avg. distance
          </h5>
          <h4 className="text-white">{props.distance}</h4>
        </div>
        {/** Stat Travel Time */}
        <div className="destination-stat-container sm:flex-1">
          <h5 className="text-light-blue font-saira-condensed tracking-wide-4 ">
            est. travel time
          </h5>
          <h4 className="text-white">{props.travelTime}</h4>
        </div>
      </div>
    </div>
  );
};

export default Destination;
