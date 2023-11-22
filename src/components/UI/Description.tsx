import '../../App.css'

const Description = () => {
    return (
        <>
            <div className="description border border-gray_ddd rounded-lg p-4">
                <p className="mb-2 text-lg  text-gray ">KHUYẾN MÃI/ƯU ĐÃI</p>
                <ul className="max-w-md space-y-1 list-none text-gray pl-5 list-inside dark:text-gray-400">
                    <li className="item-des" >
                        Giảm giá 3,000,000đ (Không áp dụng kèm Thu cũ đổi mới)
                    </li>
                    <li className="item-des">
                        Ưu đãi phòng chờ thương gia
                    </li>
                    <li className="item-des">
                        Trả góp 0% thẻ tín dụng
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Description;