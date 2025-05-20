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
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${backgroundPage})` }}
      className="bg-cover bg-no-repeat bg-top min-h-[100dvh]"
    >
      <div className="min-h-[calc(100dvh)] flex flex-col items-center justify-center py-20 sm:py-0 ">
        <div className="pt-6 sm:pt-20 w-full">
          {/* Page Title */}
          <div className="second-container pb-12 lg:pb-20">
            <PageTitle number={"03"} title={"Space launch 101"} />
          </div>

          {/* Technologies */}
          {technologies.length > 0 && (
            <div className="flex flex-col justify-center items-center space-y-12 section-content lg:flex-row lg:space-y-0 w-full">
              {/* Small screen image */}
              <div className="w-full h-60 sm:h-80 overflow-hidden flex items-center justify-center lg:hidden">
                <Image
                  src={technologies[technologyIndex].image}
                  width={600}
                  height={600}
                  alt={technologies[technologyIndex].name}
                  className="w-full"
                />
              </div>

              {/* Main content with navigation and image */}
              <div className="flex flex-col lg:flex-row items-start w-full relative ">
                {/* Left: Navigation + Technology content */}
                <div className="second-container lg:flex lg:justify-start lg:items-center lg:space-x-12 lg:flex-1">
                  {/* Navigation */}
                  <div className="flex flex-row space-x-6 items-center justify-center lg:flex-col lg:space-x-0 lg:space-y-6 pb-12 lg:pb-0 ">
                    {technologies.map((_, index) => (
                      <div
                        key={index}
                        className={`rounded-full border border-white/25 aspect-square cursor-pointer w-12 h-12 flex items-center justify-center transition-all duration-300 sm:text-2xl sm:w-16 sm:h-16 ${
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

                  {/* Technology Content */}
                  <div className="lg:w-[40%] ">
                    <Technology technology={technologies[technologyIndex]} />
                  </div>
                </div>
                {/* Right: Image touching screen edge */}
                <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-[50%] w-[30%]">
                  <Image
                    src={technologies[technologyIndex].image}
                    width={600}
                    height={600}
                    alt={technologies[technologyIndex].name}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesPage;
