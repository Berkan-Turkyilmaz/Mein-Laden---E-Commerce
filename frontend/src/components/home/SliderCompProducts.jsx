import React from "react";
import Product from "./Product";
import Slider from "react-slick";

function SliderCompProducts({ products, productsStatus }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };



  return (
    <div>
      <Slider {...settings}>
        {products?.products?.map((product) => (
          <div key={product._id} className="mb-8">
            <Product product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderCompProducts;
