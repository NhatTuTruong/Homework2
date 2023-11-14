import GroupButton from "./GroupButton";
import Description from "./Description";
import Quantity from "./Quantity";
import Button from "./Button";

const color =
[
    {
        'name' : 'Đen'
    },
    {
        'name' : 'Hồng',
    },
    {
        'name' : 'Xanh',
    }
]; 
let price = 8000000;
const Content = ({title , priceCurent , cost}: {title:string, priceCurent:string, cost:string}) => {
    return (
        <>
            <div className="p-6">
                <h3 className="text-2xl font-bold dark:text-white pb-4">{title}</h3>
                <p>Mã SP: ECS004305 | <span>Thương hiệu:Thương hiệu: Apple (1 đánh giá)</span></p>
                <p className="price text-2xl font-bold  text-primary">{priceCurent}<span className="pl-2 text-gray"><del className="text-xl font-normal" >{cost}</del></span></p>
                <div>
                    <GroupButton color={color} ></GroupButton>
                </div>
                <div>
                    <Description></Description>
                </div>
                <div>
                    <Quantity price={price} ></Quantity>
                </div>
                <div>
                    <Button value='Thêm vào giỏ hàng' icon='FaShoppingCart' className='bg-primary text-white' ></Button>
                    <Button value='Yêu thích' icon='FaHeart' className='bg-gray_ddd text-gray' ></Button>
                </div>
                <div>
                    <p className="p-2 text-center">Hoặc gọi ngay để đặt mua: 08 9898 1637 (8:00-20:00)</p>
                </div>
            </div>
        </>
    )
}

export default Content;