import Link from "next/link";

export default function Home() {
  return (
    <div className="main-container flex items-center justify-center min-h-[calc(100dvh-80px)]">
      <div className="flex flex-col space-y-32 justify-center items-center ">
        {/** Content */}
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <h5 className="text-light-blue font-barlow-condensed tracking-widest uppercase">
            So, you want to travel to
          </h5>
          <h1 className="text-white font-bellefair uppercase">Space</h1>
          <p className="font-barlow text-light-blue">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        {/** Explore Button */}
        <Link
          className="rounded-full w-40 aspect-square bg-white text-dark-blue uppercase font-bellefair flex items-center justify-center cursor-pointer text-2xl"
          href={"/destinations"}
        >
          Explore
        </Link>
      </div>
    </div>
  );
}
