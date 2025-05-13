"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import { useMenuContext } from "../../contexts/MenuContext";

const Header = () => {
  const { setMenu } = useMenuContext();

  return (
    <div className="flex flex-row items-center justify-between p-4">
      {/** Logo */}
      <div className="bg-red-500 w-12 h-12"></div>
      {/** Menu Button */}
      <GiHamburgerMenu
        className="w-8 h-8 text-light-blue cursor-pointer"
        onClick={() => {
          setMenu(true);
          console.log("heh");
        }}
      />
    </div>
  );
};

export default Header;
