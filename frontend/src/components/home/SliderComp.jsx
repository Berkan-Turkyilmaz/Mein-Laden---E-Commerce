import React from "react";
import Slider from "react-slick";

function SliderComp({ categories }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const categoriesMine = ["Sport für Männer", "Sport für Frauen", "Sport für Kinder", "Sport für Jugendliche"];
  const dummyData = [
    "https://images.unsplash.com/photo-1555378322-2d4b84bc2790?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661645433820-24c8604e4db5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNwb3J0JTIwY2xvdGhzfGVufDB8MHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1690338237128-b32fedb44d55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGNsb3RoJTIwbW9kZWx8ZW58MHwwfDB8fHww",
  ];

  const myData = categoriesMine.map((category, i) => {
    return {
      category: category,
      image: dummyData[i],
    };
  });

  console.log("myData", myData);
  return (
    <div className="">
      <Slider {...settings}>
        {myData?.map((categoryandimage, i) => (
          
            <div className=" " key={i}>
              <div className="flex justify-center items-center">
                <img
                  className=" w-5/6 h-[450px]"
                  src={categoryandimage?.image}
                  alt=""
                />
              </div>
              <div className="w-full  flex justify-center mt-6">
          
                <div className="w-5/6 text-xl font-semibold">{categoryandimage?.category}</div>
              </div>
            </div>
         
        ))}
      </Slider>
    </div>
  );
}
export default SliderComp;
