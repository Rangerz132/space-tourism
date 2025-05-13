import React from "react";

const Destination = (props: {
  name: string;
  description: string;
  distance: string;
  travelTime: string;
}) => {
  return (
    <div className="flex flex-col space-y-6 justify-center font-bellefair">
      {/** Content */}
      <div className=" flex flex-col space-y-6 text-center">
        <h2 className="text-white uppercase">{props.name}</h2>
        <p className="text-light-blue">{props.description}</p>
      </div>
      {/** Border */}
      <div className="w-full h-[0.1px] bg-grey"></div>
      {/** Stats */}
      <div className="flex flex-col space-y-6">
        {/** Stat Distance */}
        <div className="destination-stat-container">
          <h5 className="text-light-blue font-barlow-condensed tracking-widest">
            avg. distance
          </h5>
          <h4 className="text-white">{props.distance}</h4>
        </div>
        {/** Stat Travel Time */}
        <div className="destination-stat-container">
          <h5 className="text-light-blue font-barlow-condensed tracking-widest">
            est. travel time
          </h5>
          <h4 className="text-white">{props.travelTime}</h4>
        </div>
      </div>
    </div>
  );
};

export default Destination;
