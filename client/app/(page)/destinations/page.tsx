"use client";
import React, { useEffect, useState } from "react";
import Destination from "../../components/Destination/Destination";
import axios from "axios";
import PageTitle from "../../components/PageTitle/PageTitle";
import Image from "next/image";

export type DestinationType = {
  name: string;
  description: string;
  averageDistance: string;
  travelTime: string;
  imageSmall: string;
  imageLarge: string;
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
            imageSmall: destination.acf.image_small,
            imageLarge: destination.acf.image_large,
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

        setBackgroundPage(data[0].acf.image_small);
      } catch (error) {
        console.log(
          "An error occured when fetching the background page : ",
          error
        );
      }
    };
    fetchBackground();
  }, [backgroundPage]);

  return (
    <div
      style={{ backgroundImage: `url(${backgroundPage})` }}
      className="bg-cover bg-no-repeat bg-top bg-dark-blue"
    >
      <div className="main-container">
        {destinations.length > 0 && (
          <div className="flex flex-col justify-center items-center space-y-12 page-content-container ">
            {/** Page Title */}
            <PageTitle number={"01"} title={"Pick your destination"} />
            {/** Destination Image */}
            <div>
              <Image
                src={destinations[destinationIndex].imageSmall}
                width={200}
                height={200}
                alt={destinations[destinationIndex].name}
              />
            </div>
            {/** Destination Navigation */}
            <div className="flex flex-row items-center justify-center space-x-6">
              {destinations.map((destination, index) => (
                <div
                  onClick={() => setDestinationIndex(index)}
                  key={destination.name}
                  className={`text-light-blue uppercase border-b-2 font-barlow-condensed tracking-widest cursor-pointer ${
                    index === destinationIndex
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
              name={destinations[destinationIndex].name}
              description={destinations[destinationIndex].description}
              distance={destinations[destinationIndex].averageDistance}
              travelTime={destinations[destinationIndex].travelTime}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationsPage;
