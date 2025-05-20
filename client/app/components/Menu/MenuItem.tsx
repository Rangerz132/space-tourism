"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useMenuContext } from "../../contexts/MenuContext";

const MenuItem = (props: { id: string; path: string; name: string }) => {
  const { setMenu } = useMenuContext();
  const pathname = usePathname();

  console.log(pathname);
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div className="relative">
      {/** Link */}
      <Link
        href={props.path}
        onClick={() => setMenu(false)}
        onPointerEnter={() => setIsHover(true)}
        onPointerLeave={() => setIsHover(false)}
        className={`flex flex-row items-center space-x-2 text-white font-barlow-condensed uppercase tracking-widest sm:py-6 relative `}
      >
        <span className="font-bold text-base">{props.id}</span>
        <p className="text-base">{props.name}</p>
      </Link>
      {/** Border */}
      <div
        className={`absolute w-1 h-full top-0 right-0 sm:w-full sm:h-[0.5] sm:top-auto sm:right-auto  sm:bottom-[0.5] transition-color duration-300 ${
          isHover || pathname === props.path ? "bg-white" : "bg-transparent"
        }`}
      ></div>
    </div>
  );
};

export default MenuItem;
