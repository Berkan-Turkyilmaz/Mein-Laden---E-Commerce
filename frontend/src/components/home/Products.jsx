import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts  } from "../../redux/productSlice";
import SliderCompProducts from "./SliderCompProducts";

function AllProducts() {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);

  console.log(products)
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <div className="w-6/7  flex flex-col mt-32 ">
      <div className="pl-16 mb-6 text-2xl font-bold  ">All Products</div>
        <SliderCompProducts products={products} productsStatus={productsStatus}/>
      </div>
    </>
  );
}

export default AllProducts;
