
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import Modal from './Modal';
import { useState } from 'react';


function Button({ value, className, icon }: { value: string, className: string, icon: any }) {
    const [isCart, setCart] = useState(false)
    const addToCart = () => {
        setCart(true);
        console.log('Đã thêm vào giỏ hàng thành công !');
    }
    const addWhishList = () => {
        console.log('Đã thêm vào sản phẩm yêu thích !');
        alert('Đã thêm vào sản phẩm yêu thích !');
    }
    return (
        <>
            <button type="button" onClick={() => {icon == 'FaShoppingCart' ? addToCart() : addWhishList()}} className={"hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "+ className}>
            {icon == 'FaShoppingCart' ? <FaShoppingCart/> : <FaHeart/>}{value}
            </button>
            {
            
                isCart && ( 
                    <Modal></Modal>   
                )
            }
        </>
    )
}


export default Button;