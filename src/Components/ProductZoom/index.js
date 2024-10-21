import React from 'react'
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import { useRef } from 'react';


export default function ProductZoom() {
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
      };
    
      var settings2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
      };
    
      const goto = (index) => {
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
      };
  return (
    <div>
       <div className="productZoom position-relative">
              <div className="badge badge-primary">23%</div>
              <Slider
                {...settings2}
                className="zoomSliderBig"
                ref={zoomSliderBig}
              >
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba15-silver-select-202306?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1684518479266"
                  ></InnerImageZoom>
                </div>

                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba15-silver-select-202306?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1684518479266"
                  ></InnerImageZoom>
                </div>

                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba15-silver-select-202306?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1684518479266"
                  ></InnerImageZoom>
                </div>

                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba15-silver-select-202306?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1684518479266"
                  ></InnerImageZoom>
                </div>
              </Slider>
            </div>

            <Slider {...settings} className="zoomSlider w-100" ref={zoomSlider}>
              <div className="item">
                <img
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba15-silver-select-202306?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1684518479266"
                  className="w-100"
                  onClick={() => goto(0)}
                ></img>
              </div>

              <div className="item">
                <img
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba15-silver-select-202306?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1684518479266"
                  className="w-100"
                  onClick={() => goto(1)}
                ></img>
              </div>

              <div className="item">
                <img
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba15-silver-select-202306?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1684518479266"
                  className="w-100"
                  onClick={() => goto(2)}
                ></img>
              </div>

              <div className="item">
                <img
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba15-silver-select-202306?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1684518479266"
                  className="w-100"
                  onClick={() => goto(3)}
                ></img>
              </div>
            </Slider>
    </div>
  )
}
