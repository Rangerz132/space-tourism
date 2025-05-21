"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useMenuContext } from "../../contexts/MenuContext";
import TransitionLink from "../TransitionLink/TransitionLink";

const MenuItem = (props: { id: string; path: string; name: string }) => {
  const { setMenu } = useMenuContext();
  const pathname = usePathname();

  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <TransitionLink href={props.path}>
      {/** Link */}
      <div
        onClick={() => setMenu(false)}
        onPointerEnter={() => setIsHover(true)}
        onPointerLeave={() => setIsHover(false)}
        className={`flex flex-row items-center space-x-2 text-white  uppercase font-saira-condensed tracking-wide-4 sm:py-6 relative  cursor-pointer`}
      >
        <span className="font-bold text-base font-saira-condensed tracking-wide-4">
          {props.id}
        </span>
        <p className="text-base font-saira-condensed tracking-wide-4">
          {props.name}
        </p>
      </div>
      {/** Border */}
      <div
        className={`absolute w-1 h-full top-0 right-0 sm:w-full sm:h-[0.5] sm:top-auto sm:right-auto  sm:bottom-[0.5] transition-color duration-500 ${
          isHover || pathname === props.path ? "bg-white" : "bg-transparent"
        }`}
      ></div>
    </TransitionLink>
  );
};

export default MenuItem;
