/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext } from 'react';
export type GlobalContent = {
  copy: string;
  setCopy: (c: string) => void;
  menu: boolean;
  setMenu: (c: boolean) => void;
  cartItem: number;
  setCartItem: (c: number) => void;
};
export const MyGlobalContext = createContext<GlobalContent>({
  copy: 'Hello World', // set a default value
  setCopy: () => {},
  menu: false,
  setMenu: () => {},
  cartItem: 0,
  setCartItem: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
