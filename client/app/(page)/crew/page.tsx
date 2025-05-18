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
      <div className="main-container">
        <div className="flex flex-col items-center justify-center space-y-16 page-content-container">
          {/** Page Title */}
          <PageTitle number={"02"} title={"Meet your crew"} />
          {/** Crew Details */}
          {crew.length > 0 && <Crew crew={crew[crewIndex]} />}
          {/** Crew navigation */}
          {crew.length > 0 && (
            <div className="flex flex-row items-center justify-center space-x-4">
              {crew.map((crewMember, index) => (
                <div
                  key={crewMember.name}
                  className={` h-2 rounded-full transition-all duration-300 ${
                    index === crewIndex ? "bg-white w-4" : "bg-white/20 w-2"
                  }`}
                  onClick={() => setCrewIndex(index)}
                ></div>
              ))}
            </div>
          )}
          {/** Crew Image */}
          <div>
            {crew.length > 0 && (
              <Image
                className="w-[60vw]"
                src={crew[crewIndex].image}
                width={200}
                height={200}
                alt={crew[crewIndex].name}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewPage;
