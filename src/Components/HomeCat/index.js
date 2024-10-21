import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductItem from "../ProductItem";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import HomeCatItem from "../HomeCatItem";

export default function HomeCat() {
    const [itembg, setitembg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
    ])
  return (
    <div className="homeCat">
      <div className="container">
        <h3 className="mb-4 hd">Featured Categories</h3>
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          pagination={{
            clickable: false,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
            {
                itembg?.map((item, index)=>{
                    return(
                        <SwiperSlide key={index} className="cursor"><HomeCatItem  homeCatItembg = {item}></HomeCatItem></SwiperSlide>
                    )
               })
            }
            
        </Swiper>
      </div>
    </div>
  );
}
