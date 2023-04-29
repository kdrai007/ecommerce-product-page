import { useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */


const NavBar = () => {
    const [menu, setMenu] = useState(true);
    function handleMenu() {
        setMenu(!menu);

    }
    return (
        <div className="flex flex-row justify-between p-4">
            <div className="flex flex-row items-center  gap-x-5">
                <img className={`h-[18px] w-[22px] cursor-pointer ${menu ? "" : "image"}`} src={`./images/icon-${menu ? "menu" : "close"}.svg`} alt="menu icon" onClick={handleMenu} />
                <h3 className="text-3xl font-bold ">sneakers</h3>
            </div>
            <div className="flex flex-row items-center gap-x-5">
                <img className="h-[20px] w-[20px]" src="./images/icon-cart.svg" alt="menu icon" />
                <img className="h-[28px] w-[28px]" src="./images/image-avatar.png" alt="menu icon" />
            </div>
        </div>
    )
}

export default NavBar