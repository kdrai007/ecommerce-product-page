
const Cart = () => {

  return <div className="absolute absolute-add bg-White text-left z-10 rounded-lg">
    <div className=" p-5">
      <h3 className="font-semibold text-lg">Cart</h3></div>
    <hr />
    <div className="flex flex-col gap-4  justify-center py-5 text-left details p-7">
      <div className="flex justify-between">
        <img className="w-14 rounded-md" src="./images/image-product-1.jpg" alt="" />
        <div>
          <p className="text-pGray">Fall Limted Edition Sneakers</p>
          <p className="text-pGray">$125.00 x 3  <b className="text-Black">$375.00</b></p>
        </div>
        <div className="flex items-center justify-center cursor-pointer">
          <img className="w-5 h-6" src="./images/icon-delete.svg" alt="" />
        </div>
      </div>
      <button className="bg-Orange text-White p-4 rounded-md font-bold">Checkout</button>
    </div>
  </div>
}
export default Cart;