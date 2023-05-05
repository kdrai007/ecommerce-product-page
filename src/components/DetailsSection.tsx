import React from 'react'
import CartItem from './CartItem'

const DetailsSection = () => {
    return (
        <div className="p-6 display flex flex-col gap-4">
            <strong className='text-Orange tracking-wider '>SNEAKER COMPANY</strong>
            <div className="details flex flex-col gap-y-4">
                <h1 className='text-3xl font-bold leading-tight'>Fall Limited Edition Sneakers</h1>
                <p className='text-pGray'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, thye'll withstand everything the weather can offer</p>
            </div>
            <div className="price flex items-center justify-between">
                <div className="discount flex items-center justify-evenly gap-x-4">
                    <h1 className='text-3xl font-bold'>$125.00</h1>
                    <button className='bg-PaleOrange px-3 py-1 rounded-lg text-Orange font-bold'>50%</button>
                </div>
                <del className='text-pGray text-xl'>$250.00</del>
            </div>
            <CartItem />
        </div>
    )
}

export default DetailsSection