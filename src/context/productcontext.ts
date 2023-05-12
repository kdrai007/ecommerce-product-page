/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext } from "react";
export type GlobalContent = {
  copy: string;
  setCopy: (c: string) => void;
  menu: boolean;
  setMenu: (c: boolean) => void;
};
export const MyGlobalContext = createContext<GlobalContent>({
  copy: "Hello World", // set a default value
  setCopy: () => {},
  menu: false,
  setMenu: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
