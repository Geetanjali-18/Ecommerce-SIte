import React from "react";
import Slider from "react-slick";

export default function HomeBanner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container mt-3">
      <div>
      <Slider {...settings}>
        <div className="item">
            <img src="https://cmsimages.shoppersstop.com/main_strapi_web_fa797dee45/main_strapi_web_fa797dee45.png" className="w-100"></img>
        </div>
        <div className="item">
            <img src="https://cmsimages.shoppersstop.com/main_strapi_web_fa797dee45/main_strapi_web_fa797dee45.png" className="w-100"></img>
        </div>
        <div className="item">
            <img src="https://cmsimages.shoppersstop.com/main_strapi_web_fa797dee45/main_strapi_web_fa797dee45.png" className="w-100"></img>
        </div>
        <div className="item">
            <img src="https://cmsimages.shoppersstop.com/main_strapi_web_fa797dee45/main_strapi_web_fa797dee45.png" className="w-100"></img>
        </div>
      </Slider>
    </div>
    </div>
  );
}
