"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type MenuContext = {
  menu: boolean;
  setMenu: Dispatch<SetStateAction<boolean>>;
};

export const MenuContext = createContext<MenuContext | null>(null);

export function MenuContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuContext() {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("useMenuContext has to be within MenuContextProvider.");
  }

  return context;
}
