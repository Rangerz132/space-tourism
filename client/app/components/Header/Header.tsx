"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import { useMenuContext } from "../../contexts/MenuContext";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

const Header = () => {
  const { setMenu } = useMenuContext();

  return (
    <div className="fixed w-full">
      <div className="main-container relative">
        <div className="flex flex-row items-center justify-between py-6 sm:py-0">
          {/** Logo */}
          <Logo />
          <div>
            {/** Small Menu */}
            <div className="sm:absolute sm:hidden">
              {/** Menu Button */}
              <GiHamburgerMenu
                className="w-8 h-8 text-light-blue cursor-pointer"
                onClick={() => {
                  setMenu(true);
                }}
              />
            </div>
            {/** Large Menu */}
            <div className="hidden sm:flex">
              <Menu />
            </div>
          </div>
        </div>
        {/** Menu Background */}
        <div className="fixed sm:w-[85%] lg:w-[50%] bg-white/5 h-20 top-0 right-0 pointer-events-none backdrop-blur-md -z-1"></div>
      </div>
    </div>
  );
};

export default Header;
