import Link from "next/link";
import React from "react";
import LogoImage from "@/public/Logo.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"} className="cursor-pointer">
      <Image
        src={LogoImage}
        width={36}
        height={36}
        alt="logo"
        className="w-10 aspect-square sm:w-12"
      />
    </Link>
  );
};

export default Logo;
