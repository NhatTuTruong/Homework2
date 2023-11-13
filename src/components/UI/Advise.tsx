
import React, {useState} from 'react';

const Advise = () => {

    const [inputPhone, setinputPhone] = useState()

    const HandleOnChange = (event:any) =>{
        setinputPhone(event.target.value)
    }

    const HandleSubmit = () => {
        if(inputPhone != null) {
            alert(`Số điện thoại ${inputPhone} đã đăng ký thành công !`);
            console.log(`Số điện thoại ${inputPhone} đã đăng ký thành công !`);
        }else{
            alert(`Vui lòng điền số điện thoại`);
        }
        
    }
    return (
        <>
            <div className="description rounded-lg p-6">
                <p className="mb-2 text-lg  text-gray dark:text-white">Gọi lại tư vấn</p>
                <p>Bạn muốn chúng tôi gọi lại tư vấn, vui lòng điền số điện thoại vào form dưới đây</p>
                <form className="flex items-center pt-4" onSubmit={() => HandleSubmit()}>
                    <label htmlFor="voice-search" className="sr-only">Search</label>
                    <div className="relative w-[500]">
                        <input type="number"  value={inputPhone} onChange={HandleOnChange} className="bg-gray-50 border border-gray_ddd text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
                    </div>
                    <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-primary rounded border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Đăng ký
                    </button>
                </form>

            </div>
        </>
    )
}

export default Advise