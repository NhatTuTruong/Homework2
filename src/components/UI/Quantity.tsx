import '../../App.css'
import React, { useState } from 'react';

const Quantity = ({price} : {price:any}) => {
    const [countPrice, setPrice] = useState(price);
    
    const handleChange = (event:any) => {
        // 👇 Get input value from "event"
        setPrice(event.target.value * price);
      };

    return (
        <>
            <div className="quantity grid grid-cols-2 gap-1 p-4">
                <div className='count-quatity grid grid-cols-2 gap-2'>
                    <p>Số lượng: </p>
                    <input className='w-12 border  border-gray_ddd' onChange={handleChange} type="number" />
                </div>
                <div className='price grid grid-cols-2 gap-2'>
                    <p>Thanh toán: </p>
                    <p className='font-bold'>{countPrice.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                </div>
            </div>
        </>
    )
}

export default Quantity;