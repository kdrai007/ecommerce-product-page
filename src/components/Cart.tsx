import { useGlobalContext } from "../context/productcontext";
import { useState, useEffect } from 'react';
const Cart = () => {
  const { cartItem, setCartItem } = useGlobalContext();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    console.log(screenWidth)
    setScreenWidth(window.innerWidth);
  }, [screenWidth])
  return <div className={`absolute md:top-[85px] md:right-[200px] md:w-[500px] md:shadow-lg ${screenWidth < 760 && 'absolute-add'}  bg-White text-left z-10 rounded-lg`}>
    <div className=" p-5">
      <h3 className="font-semibold text-lg">Cart</h3></div>
    <hr />
    <div className="flex flex-col gap-4  justify-center py-5 text-left details p-7">
      {cartItem > 0 && <div className="flex justify-between">
        <img className="w-14 rounded-md" src="./images/image-product-1.jpg" alt="" />
        <div>
          <p className="text-pGray">Fall Limted Edition Sneakers</p>
          <p className="text-pGray">$125.00 x {cartItem}  <b className="text-Black">${125 * cartItem}.00</b></p>
        </div>
        <div className="flex items-center justify-center cursor-pointer">
          <img role="button" onClick={() => setCartItem(0)} className="w-5 h-6" src="./images/icon-delete.svg" alt="" />
        </div>
      </div>}
      {cartItem > 0 ? <button className="bg-Orange text-White p-4 rounded-md font-bold">Checkout</button> : <strong className="text-center">Your Cart is empty</strong>}
    </div>
  </div>
}
export default Cart;