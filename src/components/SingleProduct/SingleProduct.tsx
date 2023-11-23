import Image from "../../components/UI/Image";
import Content from "../UI/Content";
import Specifications from "../UI/Specifications";
import productImage from '..//../assets/images/xiaomi-redmi-note-11s-5g-G4305-1650508487726.jpg'
import Subscribe from "../UI/Subscribe";
import News from "../UI/News";
import Accessory from "../UI/Accessory";
import Advise from "../UI/Advise";
import Review from "../UI/Review";

import info from '../../data/info'
import news from '../../data/news'
import accessory from '../../data/accessory'
import Form001 from "../Form/Form001";
import Form002 from "../Form/Form002";


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
                        <Review></Review>
                    </div>
                    <div>
                        <Specifications info={info}></Specifications>
                        <Advise></Advise>
                        <News news={news}></News>
                        <Subscribe></Subscribe>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 p-8">
                    <Form001></Form001>
                    <Form002></Form002>
                </div>
            </div>
        </>
    )
}

export default SingleProduct;