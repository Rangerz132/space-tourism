"use client";

import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import axios from "axios";
import Image from "next/image";
import Technology, {
  TechnologyType,
} from "../../components/Technology/Technology";

const TechnologiesPage = () => {
  const [technologies, setTechnologies] = useState<TechnologyType[]>([]);
  const [technologyIndex, setTechnologyIndex] = useState<number>(0);
  const [backgroundPage, setBackgroundPage] = useState<string>("");

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const result = await axios.get(
          "http://localhost:8080/wp-json/wp/v2/technology"
        );
        const data = result.data;

        const formatedTechnologies = data.map((technology) => ({
          name: technology.acf.name,
          description: technology.acf.description,
          image: technology.acf.image,
        }));

        setTechnologies(formatedTechnologies);
      } catch (error) {
        console.log("An error occured when fetching technologies : ", error);
      }
    };
    fetchTechnologies();
  }, []);

  useEffect(() => {
    const fetchBackground = async () => {
      try {
        const result = await axios.get(
          "http://localhost:8080/wp-json/wp/v2/pages?slug=technology"
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
      <div className="page-content-container ">
        {/** Page Title */}
        <div className="main-container pb-12">
          <PageTitle number={"03"} title={"Space launch 101"} />
        </div>
        {/** Technologies */}
        {technologies.length > 0 && (
          <div className="flex flex-col justify-center items-center space-y-12 ">
            {/** Technology Image */}
            <div className="w-full h-100 overflow-hidden flex items-center justify-center">
              <Image
                src={technologies[technologyIndex].image}
                width={200}
                height={200}
                alt={technologies[technologyIndex].name}
                className="w-full"
              />
            </div>
            {/**Technology Navigations */}
            <div className="main-container">
              <div className="flex flex-row space-x-6 items-center justify-center md:flex-col md:space-x-0 md:space-y-6">
                {technologies.map((technology, index) => (
                  <div
                    key={index}
                    className={`rounded-full border border-white/25 aspect-square cursor-pointer w-12 h-12  flex items-center justify-center transition-all duration-300 sm:text-2xl sm:w-16 sm:h-16 ${
                      index === technologyIndex
                        ? "text-dark-blue bg-white"
                        : "text-white bg-transparent"
                    }`}
                    onClick={() => setTechnologyIndex(index)}
                  >
                    {index}
                  </div>
                ))}
              </div>
            </div>
            {/** Technology Content */}
            <div className="main-container">
              <Technology technology={technologies[technologyIndex]} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechnologiesPage;
