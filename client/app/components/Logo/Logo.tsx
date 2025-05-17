import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="cursor-pointer">
      <div className="bg-red-500 w-12 h-12"></div>
    </Link>
  );
};

export default Logo;
