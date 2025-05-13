"use client";
import Link from "next/link";
import React from "react";
import { useMenuContext } from "../../contexts/MenuContext";

const MenuItem = (props: { id: string; path: string; name: string }) => {
  const { setMenu } = useMenuContext();

  return (
    <div className="flex flex-row space-x-2 text-white font-barlow-condensed uppercase tracking-widest">
      <span className="font-bold">{props.id}</span>
      <Link href={props.path} onClick={() => setMenu(false)}>
        {props.name}
      </Link>
    </div>
  );
};

export default MenuItem;
