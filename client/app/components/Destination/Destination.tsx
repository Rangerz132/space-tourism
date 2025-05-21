import React from "react";

export type DestinationType = {
  name: string;
  description: string;
  averageDistance: string;
  travelTime: string;
  image: string;
};

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
        <h2 className="text-white uppercase destination-element">
          {props.name}
        </h2>
        <p className="text-light-blue destination-element">
          {props.description}
        </p>
      </div>
      {/** Border */}
      <div className="w-full h-[0.1px] bg-grey destination-element"></div>
      {/** Stats */}
      <div className="flex flex-col items-center justify-center space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6 destination-element">
        {/** Stat Distance */}
        <div className="destination-stat-container sm:flex-1 ">
          <h5 className="text-light-blue font-saira-condensed tracking-wide-4">
            avg. distance
          </h5>
          <h4 className="text-white">{props.distance}</h4>
        </div>
        {/** Stat Travel Time */}
        <div className="destination-stat-container sm:flex-1 ">
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
