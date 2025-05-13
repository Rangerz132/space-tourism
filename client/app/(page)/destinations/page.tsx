"use client";
import React, { useEffect, useState } from "react";
import Destination from "../../components/Destination/Destination";
import axios from "axios";

export type DestinationType = {
  name: string;
  description: string;
  averageDistance: string;
  travelTime: string;
};

const DestinationsPage = () => {
  const [destinations, setDestinations] = useState<DestinationType[]>([]);
  const [currentDestinationIndex, setCurrentDestinationIndex] =
    useState<number>(0);

  useEffect(() => {
    const getDestination = async () => {
      try {
        const result = await axios.get(
          "http://localhost:8080/wp-json/wp/v2/destination"
        );

        const formattedDestinations: DestinationType[] = result.data.map(
          (destination) => ({
            name: destination.acf?.name ?? "Unknown",
            description: destination.acf?.description ?? "No description",
            averageDistance: destination.acf?.average_distance ?? "Unknown",
            travelTime: destination.acf?.travel_time ?? "Unknown",
          })
        );

        setDestinations(formattedDestinations);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    getDestination();

    console.log(destinations);
  }, []);

  return (
    <div className="main-container ">
      {destinations.length > 0 && (
        <div className="flex flex-col justify-center space-y-12">
          {/** Destination Image */}
          <div></div>
          {/** Destination Navigation */}
          <div className="flex flex-row items-center justify-center space-x-6">
            {destinations.map((destination, index) => (
              <div
                onClick={() => setCurrentDestinationIndex(index)}
                key={destination.name}
                className={`text-light-blue uppercase border-b-2 font-barlow-condensed tracking-widest ${
                  index === currentDestinationIndex
                    ? "border-b-white"
                    : "border-b-transparent"
                }`}
              >
                {destination.name}
              </div>
            ))}
          </div>
          {/** Destination Content */}
          <Destination
            name={destinations[currentDestinationIndex].name}
            description={destinations[currentDestinationIndex].description}
            distance={destinations[currentDestinationIndex].averageDistance}
            travelTime={destinations[currentDestinationIndex].travelTime}
          />
        </div>
      )}
    </div>
  );
};

export default DestinationsPage;
