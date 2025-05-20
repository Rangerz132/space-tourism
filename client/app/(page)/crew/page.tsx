"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Crew, { CrewType } from "../../components/Crew/Crew";
import Image from "next/image";
import PageTitle from "../../components/PageTitle/PageTitle";

const CrewPage = () => {
  const [crew, setCrew] = useState<CrewType[]>([]);
  const [crewIndex, setCrewIndex] = useState<number>(0);
  const [backgroundPage, setBackgroundPage] = useState<string>("");

  useEffect(() => {
    const fetchCrew = async () => {
      try {
        const result = await axios.get(
          "http://localhost:8080/wp-json/wp/v2/crew"
        );

        const data = result.data;

        const formatedCrewList = data.map((crewMember) => ({
          name: crewMember.acf.name,
          role: crewMember.acf.role,
          biography: crewMember.acf.biography,
          image: crewMember.acf.image,
        }));

        setCrew(formatedCrewList);
      } catch (error) {
        console.log("An error occured when fetching the crew list :", error);
      }
    };

    fetchCrew();
  }, []);

  useEffect(() => {
    const fetchBackground = async () => {
      try {
        const result = await axios.get(
          "http://localhost:8080/wp-json/wp/v2/pages?slug=crew"
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

  return (
    <div
      style={{ backgroundImage: `url(${backgroundPage})` }}
      className="bg-cover bg-no-repeat bg-top min-h-[100dvh]"
    >
      <div className="min-h-[calc(100dvh)] flex flex-col items-center justify-center py-20 sm:py-0 ">
        <div className="pt-6 sm:pt-20">
          <div className="second-container pb-12 lg:pb-20">
            {/** Page Title */}
            <PageTitle number={"02"} title={"Meet your crew"} />
          </div>
          <div className="flex flex-col items-center justify-center space-y-8 second-container lg:flex-row lg:justify-between  sm:space-y-0 section-content ">
            <div className="flex-1 flex flex-col space-y-12 lg:space-y-30">
              {/** Crew Details */}
              {crew.length > 0 && <Crew crew={crew[crewIndex]} />}
              {/** Crew navigation */}
              {crew.length > 0 && (
                <div className="flex flex-row items-center justify-center space-x-4 lg:space-x-8 lg:justify-start">
                  {crew.map((crewMember, index) => (
                    <div
                      key={crewMember.name}
                      className={` h-2 lg:h-3 rounded-full cursor-pointer transition-all duration-300 ${
                        index === crewIndex
                          ? "bg-white w-4 lg:w-6"
                          : "bg-white/20 w-2 lg:w-3"
                      }`}
                      onClick={() => setCrewIndex(index)}
                    ></div>
                  ))}
                </div>
              )}
            </div>

            {/** Crew Image */}
            <div className="flex-1 lg:flex lg:justify-end">
              {crew.length > 0 && (
                <Image
                  className="w-[60vw] sm:w-[40vw] lg:w-[25vw]"
                  src={crew[crewIndex].image}
                  width={600}
                  height={600}
                  alt={crew[crewIndex].name}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewPage;
