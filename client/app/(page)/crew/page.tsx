import axios from "axios";
import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import CrewCarousel from "../../components/Crew/CrewCarousel";

export default async function CrewPage() {
  const crewResult = await axios.get(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp/v2/crew`
  );

  const crewList = crewResult.data.map((crewMember) => ({
    name: crewMember.acf.name,
    role: crewMember.acf.role,
    biography: crewMember.acf.biography,
    image: crewMember.acf.image,
  }));

  const pageResult = await axios.get(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp/v2/pages?slug=crew`
  );
  const backgroundPage = pageResult.data[0].acf.image;

  return (
    <div
      style={{ backgroundImage: `url(${backgroundPage})` }}
      className="bg-cover bg-no-repeat min-h-[100dvh] bg"
    >
      <div className="min-h-[calc(100dvh)] flex flex-col items-center justify-center py-20 sm:py-0 ">
        <div className="pt-6 sm:pt-20">
          <div className="second-container pb-12 lg:pb-20">
            {/** Page Title */}
            <PageTitle number={"02"} title={"Meet your crew"} />
          </div>
          {/** Crew Carousel */}
          <CrewCarousel crew={crewList} />
        </div>
      </div>
    </div>
  );
}
