"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import { useMenuContext } from "../../contexts/MenuContext";
import Logo from "../Logo/Logo";

const Header = () => {
  const { setMenu } = useMenuContext();

  return (
    <div className="fixed w-full ">
      <div className="flex flex-row items-center justify-between p-4">
        {/** Logo */}
        <Logo />
        {/** Menu Button */}
        <GiHamburgerMenu
          className="w-8 h-8 text-light-blue cursor-pointer"
          onClick={() => {
            setMenu(true);
          }}
        />
      </div>
    </div>
  );
};

export default Header;
