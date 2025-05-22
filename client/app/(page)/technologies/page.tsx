import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import axios from "axios";
import TechnologyCarousel from "../../components/Technology/TechnologyCarousel";

export default async function TechnologiesPage() {
  const pageResult = await axios.get(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp/v2/pages?slug=technology`
  );
  const backgroundPage = pageResult.data[0].acf.image;

  const technologyResult = await axios.get(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp/v2/technology`
  );
  const technologies = technologyResult.data.map((technology) => ({
    name: technology.acf.name,
    description: technology.acf.description,
    image: technology.acf.image,
  }));

  return (
    <div
      style={{ backgroundImage: `url(${backgroundPage})` }}
      className="bg-cover bg-no-repeat  min-h-[100dvh] bg"
    >
      <div className="min-h-[calc(100dvh)] flex flex-col items-center justify-center py-20 sm:py-0 ">
        <div className="pt-6 sm:pt-20 w-full">
          {/* Page Title */}
          <div className="second-container pb-12 lg:pb-20">
            <PageTitle number={"03"} title={"Space launch 101"} />
          </div>

          {/* Technologies */}
          {technologies.length > 0 && (
            <TechnologyCarousel technologies={technologies} />
          )}
        </div>
      </div>
    </div>
  );
}
