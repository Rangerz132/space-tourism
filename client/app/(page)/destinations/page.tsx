import React from "react";
import { DestinationType } from "../../components/Destination/Destination";
import axios from "axios";
import PageTitle from "../../components/PageTitle/PageTitle";
import DestinationCarousel from "../../components/Destination/DestinationCarousel";

export default async function DestinationsPage() {
  const pageResult = await axios.get(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp/v2/pages?slug=destination`
  );
  const pageData = pageResult.data[0];
  const backgroundPage = pageData.acf.image;

  const destinationsResult = await axios.get(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp/v2/destination`
  );

  const destinations: DestinationType[] = destinationsResult.data.map(
    (destination) => ({
      name: destination.acf.name,
      description: destination.acf.description,
      averageDistance: destination.acf.average_distance,
      travelTime: destination.acf.travel_time,
      image: destination.acf.image,
    })
  );

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
              <DestinationCarousel destinations={destinations} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
