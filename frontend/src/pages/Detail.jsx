import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductDetailComp from "../components/ProductDetail/ProductDetailComp";
import Loading from "../components/Loading";
import { getProductDetails } from "../redux/productSlice";


export default function Detail() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { productDetails, productDetailsStatus } = useSelector(
    (state) => state.products
  );
console.log(productDetails, "productDetails");
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <div className="w-full mt-10   ">
      {productDetailsStatus === "loading" ? (<Loading />) : 
      
      <ProductDetailComp productDetails={productDetails} />}

   
    </div>
  );
}
