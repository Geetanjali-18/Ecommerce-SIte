import Button from "@mui/material/Button";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import ProductItem from "../ProductItem";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function HomeProducts() {
  return (
    <div className="homeProducts">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="banner">
              <img
                src="https://media.gettyimages.com/id/1392819564/photo/woman-hand-holds-flying-skin-care-products-on-pastel-pink-color-background.jpg?s=612x612&w=gi&k=20&c=b6BeWTlbilOspwZoJ51__hBEsEPymGwv_XuqnpY3W40="
                className="cursor"
              ></img>
            </div>
          </div>
          <div className="col-md-9 productRow">
            <div className="d-flex align-items-center">
              <div className="info w-75">
                <h3 className="mb-0">Best Sellers</h3>
                <p className="textLight text-sml mb-0 mt-2">
                  Do not miss the curent offers until the end of march
                </p>
              </div>

              <Button className="viewAllBtn ml-auto">
                View All
                <FaLongArrowAltRight />
              </Button>
            </div>

            <div className="product_row w-100 mt-4">
              <Swiper
                slidesPerView={4}
                spaceBetween={0}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide><ProductItem className="productItemBest" imageAddress="https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg"></ProductItem></SwiperSlide>
                <SwiperSlide><ProductItem className="productItemBest" imageAddress="https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg"></ProductItem></SwiperSlide>
                <SwiperSlide><ProductItem className="productItemBest" imageAddress="https://m.media-amazon.com/images/I/41gCVWVKI1L._SY300_SX300_.jpg"></ProductItem></SwiperSlide>
                <SwiperSlide><ProductItem className="productItemBest" imageAddress="https://rukminim2.flixcart.com/image/612/612/ktx9si80/candle/k/m/w/home-decor-no-multi-color-led-candles-tea-light-candles-for-original-imag75p9ywtutte6.jpeg?q=70"></ProductItem></SwiperSlide>
                <SwiperSlide><ProductItem className="productItemBest" imageAddress="https://rukminim2.flixcart.com/image/612/612/k0jvy4w0/candle/h/p/p/yes-diwali-special-magic-colour-led-glowing-tea-light-12-diwali-original-imafkbxktmrzp5ke.jpeg?q=70"></ProductItem></SwiperSlide>
                <SwiperSlide><ProductItem className="productItemBest" imageAddress="https://rukminim2.flixcart.com/image/612/612/xif0q/diya/c/z/v/1-14-diya-shape-flower-decorative-urli-for-diwali-festive-original-imah3zf5yyufcjrr.jpeg?q=70"></ProductItem></SwiperSlide>
                
              </Swiper>
            </div>

            <div className="d-flex align-items-center">
              <div className="info w-75">
                <h3 className="mb-0">New Sellers</h3>
                <p className="textLight text-sml mb-0 mt-2">
                  Do not miss the curent offers until the end of march
                </p>
              </div>

              <Button className="viewAllBtn ml-auto">
                View All
                <FaLongArrowAltRight />
              </Button>
            </div>

            <div className="product_row product_row2 w-100 mt-4 d-flex">
              <ProductItem className="productItemNew" imageAddress="https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg"></ProductItem>
              <ProductItem className="productItemNew" imageAddress="https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg"></ProductItem>
              <ProductItem className="productItemNew" imageAddress="https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg"></ProductItem>
              <ProductItem className="productItemNew" imageAddress="https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg"></ProductItem>
              <ProductItem className="productItemNew" imageAddress="https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg"></ProductItem>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
