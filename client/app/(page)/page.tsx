import axios from "axios";

import ExploreButton from "../components/Explore/ExploreButton";
import HomeSection, {
  HeroSectionType,
} from "../components/HomeSection/HomeSection";

export default async function Home() {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp/v2/pages?slug=home`
  );

  const data = result.data[0];

  const backgroundPage = data.acf.image;
  const homeContent: HeroSectionType = {
    subtitle: data.acf.subtitle || "",
    title: data.acf.title || "",
    content: data.acf.content || "",
  };

  return (
    <div
      style={{ backgroundImage: `url(${backgroundPage})` }}
      className="bg-cover bg-no-repeat  bg-dark-blue bg"
    >
      <div className="min-h-[calc(100dvh)] flex items-center justify-center lg:items-end lg:py-30">
        <div className="second-container flex flex-col space-y-12 justify-center items-center lg:space-y-0 lg:flex-row pt-[80px]">
          {/** Content */}
          <HomeSection data={homeContent} />
          {/** Explore Button */}
          <ExploreButton />
        </div>
      </div>
    </div>
  );
}
