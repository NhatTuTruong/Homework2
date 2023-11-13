import Image from "../../components/UI/Image";
import Content from "../UI/Content";
import Specifications from "../UI/Specifications";
import productImage from '..//../assets/images/xiaomi-redmi-note-11s-5g-G4305-1650508487726.jpg'
import News from "../UI/News";
import Accessory from "../UI/Accessory";
import Advise from "../UI/Advise";


import info from '../../data/info'
import news from '../../data/news'
import accessory from '../../data/accessory'


const SingleProduct = () => {
    return (
        <>
            <div className="section max-w-screen-2xl">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 p-8">
                    <div className="col-span-2">
                        <div className="flex">
                            <Image image={productImage} ></Image>
                            <Content title="Xiaomi Redmi Note 11S 5G" priceCurent="12.490.000đ" cost="16.990.000đ"></Content>
                        </div>
                        <Accessory accessory={accessory} ></Accessory>
                    </div>
                    <div>
                        <Specifications info={info}></Specifications>
                        <Advise></Advise>
                        <News news={news}></News>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct;