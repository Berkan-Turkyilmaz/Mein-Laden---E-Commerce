import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/products/${product.id}`)} className="flex justify-center text-lg">
      <div className="w-5/6 flex-col items-center">
      <div className="flex justify-center  "><img className="h-[450px]" src={product.image} alt="" /></div>
      <div className="font-bold mt-8">{product.title}</div>
      <div className="">{product.category}</div>
      <div className="font-bold">{product.price}€</div>
      </div>

    </div>
  );
}
// onClick={() => navigate(`/products/${product.id}`)} UNUTMA!
export default Product;
