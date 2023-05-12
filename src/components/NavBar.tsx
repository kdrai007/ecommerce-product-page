import { useState } from "react";
import { useGlobalContext } from "../context/productcontext";
import Cart from "./Cart";
import Menu from "./Menu";
// import { ReactComponent as cartIcon } from "../assets/icon-cart-2.svg";

/* eslint-disable @typescript-eslint/no-explicit-any */


const NavBar = () => {
  const { menu, setMenu } = useGlobalContext();
  const [cart, setCart] = useState(false);
  function handleMenu() {
    if (cart) setCart(false);
    setMenu(!menu);

  }
  function handleCart() {
    setCart(!cart);
    if (menu === false) {
      setMenu(true);
    }
  }
  return (
    <div className="flex flex-row justify-between p-4">
      <div className="flex flex-row items-center  gap-x-5 relative">
        <img className={`h-[18px] w-[22px] cursor-pointer ${menu ? "" : "image"} z-10`} src={`./images/icon-${menu ? "menu" : "close"}.svg`} alt="menu icon" onClick={handleMenu} />
        <h3 className="text-3xl font-bold tracking-tighter">sneakers</h3>
      </div>
      {!menu && <Menu />}
      {cart && <Cart />}
      <div className="flex flex-row items-center gap-x-5">
        {/* <img className="h-[20px] w-[20px]" src={cartIcon} alt="menu icon" /> */}
        <button onClick={handleCart}>
          <svg className="cursor-pointer" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill={cart ? "#000" : "#808080"} fillRule="nonzero" /></svg></button>
        <img className="h-[28px] w-[28px]" src="./images/image-avatar.png" alt="menu icon" />
      </div>
    </div>
  )
}

export default NavBar
