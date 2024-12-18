import React from "react";
import { useNavigate } from "react-router-dom";
import RatingComp from "../ProductDetail/RatingComp";

function Product({ product, isProductsByCategoryPatch }) {
  const navigate = useNavigate();
  return (
    <div 
    className="flex justify-center text-lg ">
      <div className="w-5/6 flex-col items-center">
      <div className="flex justify-center  "><img className="h-[450px] w-full" src={product?.image} alt="" /></div>
      <div className="flex items-center justify-between mt-4"><div className="font-semibold ">{product?.title}</div><div>      <div className="font-bold">{product?.price}€</div></div> </div>
      {isProductsByCategoryPatch ? null : <div>{product?.category}</div>}

      </div>

    </div>
  );
}

// onClick={() => navigate(`/products/${product?._id}`)}
export default Product;
