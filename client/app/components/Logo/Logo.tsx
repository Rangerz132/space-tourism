import React from "react";
import LogoImage from "@/public/Logo.svg";
import Image from "next/image";
import TransitionLink from "../TransitionLink/TransitionLink";

const Logo = () => {
  return (
    <TransitionLink href={"/"}>
      <div className="cursor-pointer">
        <Image
          src={LogoImage}
          width={36}
          height={36}
          alt="logo"
          className="w-10 aspect-square sm:w-12"
        />
      </div>
    </TransitionLink>
  );
};

export default Logo;
