import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import RatingComp from "./RatingComp";

function ProductDetailComp({ productDetails }) {
  const [quantity, setQuantity] = React.useState(1);

  const dispatch = useDispatch();

  const addToBasket = () => {
    dispatch(addToCart({ ...productDetails, quantity }));
  };
  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="w-full   flex justify-center mt-20">
      <div className="w-3/5 flex-col  ">
        <div className="w-full flex justify-center space-x-2  ">
          <div className="w-1/2 flex justify-center items-center ">
            <img className="h-[500px] " src={productDetails?.image} alt="" />
          </div>
          <div className="w-1/2 flex-col justify-center items-center">
            <div className="text-3xl font-semibold mt-16">
              {productDetails?.title}
            </div>
            <div className="text-xl  mt-4">{productDetails?.description}</div>
            <div className="flex  gap-2 font-bold mt-8 text-2xl">
              <div>{productDetails?.rating?.rate}</div>

              <RatingComp productDetails={productDetails} />
              <span className="font-semibold">{productDetails?.rating?.count} Ratings</span>
            </div>
            <div className="text-4xl font-semibold mt-16">
              {productDetails?.price} €
            </div>
            <div className="mt-8 w-1/4 flex justify-center p-2 border-2 border-solid border-black rounded-3xl bg-black text-white"><button>Buy Now</button></div>
          </div>
        </div>
        <div className=" gap-2 mt-20 text-blue-700  ">
          <Link to="/" className="flex gap-2 items-center cursor-pointer">
            <FaArrowLeftLong />
            Continue to shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailComp;
