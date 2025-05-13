"use client";
import { BiX } from "react-icons/bi";
import Menu from "../Menu/Menu";
import { useMenuContext } from "../../contexts/MenuContext";

const Sidebar = () => {
  const { menu, setMenu } = useMenuContext();

  const handleCloseButtonClick = () => {
    setMenu(false);
  };

  return (
    <div
      className={`fixed w-[70%] h-[100vh] backdrop-blur-2xl bg-white/20 z-20 right-0 transition-transform duration-300 ${
        menu ? "translate-x-[0]" : "translate-x-[100%]"
      }`}
    >
      <div className="p-6 flex flex-col space-y-12">
        {/** Close Button */}
        <div className="flex justify-end">
          <BiX
            onClick={handleCloseButtonClick}
            className="text-light-blue w-10 h-10 cursor-pointer"
          />
        </div>
        {/** Menu List */}
        <Menu />
      </div>
    </div>
  );
};

export default Sidebar;
