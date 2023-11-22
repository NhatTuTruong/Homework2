import '../../App.css'


const Accessory = ({ accessory }: { accessory: any }) => {
    return (
        <>
            <div className="description rounded-lg p-6" >
                <p className="mb-2 text-xl  text-gray ">Phụ kiện tương thích</p>
                <div className='grid grid-cols-4 gap-4 p-2' >
                    {
                        accessory.map((item: any) => (

                            <div key={item.content} >
                                <img src={item.imageUrl} alt="" />
                                <p>{item.content}</p>
                                <p className='price font-bold'>{item.price}</p>
                                <button type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Mua kèm</button>
                            </div>
                        ))

                    }
                </div>
            </div>
        </>
    )
}

export default Accessory;