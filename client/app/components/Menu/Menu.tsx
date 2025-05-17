import React from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="w-full">
      <ul className="flex flex-col space-y-6 ">
        <li>
          <MenuItem id={"00"} path={"/"} name={"Home"} />
        </li>
        <li>
          <MenuItem id={"01"} path={"/destinations"} name={"Destinations"} />
        </li>
        <li>
          <MenuItem id={"02"} path={"/crew"} name={"Crew"} />
        </li>
        <li>
          <MenuItem id={"03"} path={"/technologies"} name={"Technologies"} />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
