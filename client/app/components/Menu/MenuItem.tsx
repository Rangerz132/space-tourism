"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useMenuContext } from "../../contexts/MenuContext";

const MenuItem = (props: { id: string; path: string; name: string }) => {
  const { setMenu } = useMenuContext();
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <Link
      href={props.path}
      onClick={() => setMenu(false)}
      onPointerEnter={() => setIsHover(true)}
      onPointerLeave={() => setIsHover(false)}
      className={`flex flex-row items-center space-x-2 text-white font-barlow-condensed uppercase tracking-widest border-r-4 transition-all duration-300 ${
        isHover ? "border-white" : "border-transparent"
      }`}
    >
      <span className="font-bold">{props.id}</span>
      <p>{props.name}</p>
    </Link>
  );
};

export default MenuItem;
