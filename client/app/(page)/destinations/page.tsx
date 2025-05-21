"use client";
import React, { useEffect, useState } from "react";
import Destination from "../../components/Destination/Destination";
import axios from "axios";
import PageTitle from "../../components/PageTitle/PageTitle";
import Image from "next/image";
import DestinationNavigation from "../../components/Destination/DestinationNavigation";
import { animatePageBackground } from "../../utils/animations";

export type DestinationType = {
  name: string;
  description: string;
  averageDistance: string;
  travelTime: string;
  image: string;
};

const DestinationsPage = () => {
  const [destinations, setDestinations] = useState<DestinationType[]>([]);
  const [destinationIndex, setDestinationIndex] = useState<number>(0);
  const [backgroundPage, setBackgroundPage] = useState<string>("");

  useEffect(() => {
    const getDestination = async () => {
      try {
        const result = await axios.get(
          "http://localhost:8080/wp-json/wp/v2/destination"
        );

        const formattedDestinations: DestinationType[] = result.data.map(
          (destination) => ({
            name: destination.acf.name,
            description: destination.acf.description,
            averageDistance: destination.acf.average_distance,
            travelTime: destination.acf.travel_time,
            image: destination.acf.image,
          })
        );

        setDestinations(formattedDestinations);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    getDestination();
  }, []);

  useEffect(() => {
    const fetchBackground = async () => {
      try {
        const result = await axios.get(
          "http://localhost:8080/wp-json/wp/v2/pages?slug=destination"
        );

        const data = result.data;

        setBackgroundPage(data[0].acf.image);
      } catch (error) {
        console.log(
          "An error occured when fetching the background page : ",
          error
        );
      }
    };
    fetchBackground();
  }, [backgroundPage]);

  useEffect(() => {
    const cleanup = animatePageBackground();
    return cleanup;
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${backgroundPage})` }}
      className="bg-cover bg-no-repeat  min-h-[100dvh] bg"
    >
      <div className="min-h-[calc(100dvh)] flex flex-col items-center justify-center py-20 sm:py-0 ">
        <div className="pt-6 sm:pt-20">
          <div className="second-container pb-12 lg:pb-20">
            {/** Page Title */}
            <PageTitle number={"01"} title={"Pick your destination"} />
          </div>
          {/** Destinations */}
          <div className="second-container">
            {destinations.length > 0 && (
              <div className="flex flex-col justify-center items-center space-y-20 lg:flex-row lg:space-x-12 lg:space-y-0 section-content">
                {/** Destination Image */}
                <div className="w-full flex items-center justify-center lg:flex-1">
                  <Image
                    src={destinations[destinationIndex].image}
                    width={600}
                    height={600}
                    alt={destinations[destinationIndex].name}
                    className="sm:w-[40%] aspect-square lg:w-[80%]"
                  />
                </div>
                <div className="md:flex-1 space-y-12">
                  {/** Destination Navigation */}
                  <div className="flex flex-row items-center justify-center space-x-6 lg:justify-start">
                    {destinations.map((destination, index) => (
                      <DestinationNavigation
                        key={index}
                        index={index}
                        name={destination.name}
                        currentIndex={destinationIndex}
                        onClick={() => setDestinationIndex(index)}
                      />
                    ))}
                  </div>
                  {/** Destination Content */}
                  <Destination
                    name={destinations[destinationIndex].name}
                    description={destinations[destinationIndex].description}
                    distance={destinations[destinationIndex].averageDistance}
                    travelTime={destinations[destinationIndex].travelTime}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;
