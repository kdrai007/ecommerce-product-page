import React, { useState } from 'react'

const CartItem = () => {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(prevCount => prevCount + 1);
    }
    function decrement() {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    }
    return (
        <div className='flex flex-col gap-4'>
            <div className="counter rounded-lg flex justify-between p-5">
                <button className='decrement' onClick={decrement}> <img src="./images/icon-minus.svg" alt="minus" /> </button>
                <p className='font-bold text-xl'>{count}</p>
                <button className='increment' onClick={increment}> <img src="./images/icon-plus.svg" alt="minus" /> </button>
            </div>
            <button className='flex justify-center items-center bg-Orange p-4 rounded-xl'><img className='fill-White' src="./images/icon-cart.svg" alt="" /> <p className='text-White font-bold ml-4'>Add to cart</p></button>
        </div>
    )
}

export default CartItem