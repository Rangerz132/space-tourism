"use client";

import axios from "axios";

import { useEffect, useState } from "react";
import ExploreButton from "../components/Explore/ExploreButton";
import { animatePageBackground } from "../utils/animations";

export default function Home() {
  const [backgroundPage, setBackgroundPage] = useState<string>("");
  useEffect(() => {
    const fetchBackground = async () => {
      try {
        const result = await axios.get(
          "http://localhost:8080/wp-json/wp/v2/pages?slug=home"
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

  useEffect(() => {
    const cleanup = animatePageBackground();
    return cleanup;
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${backgroundPage})` }}
      className="bg-cover bg-no-repeat  bg-dark-blue bg"
    >
      <div className="min-h-[calc(100dvh)] flex items-center justify-center lg:items-end lg:py-30">
        <div className="second-container flex flex-col space-y-12 justify-center items-center lg:space-y-0 lg:flex-row pt-[80px]">
          {/** Content */}
          <div className="flex flex-col items-center justify-center space-y-8 text-center lg:text-left lg:items-start lg:justify-start lg:flex-1">
            <h5 className="text-light-blue  uppercase lg:text-left font-saira-condensed tracking-wide-4">
              So, you want to travel to
            </h5>
            <h1 className="text-white font-bellefair uppercase lg:text-left">
              Space
            </h1>
            <p className="font-barlow text-light-blue lg:text-left">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          {/** Explore Button */}
          <ExploreButton />
        </div>
      </div>
    </div>
  );
}
