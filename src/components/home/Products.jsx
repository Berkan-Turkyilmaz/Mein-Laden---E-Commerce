import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProductsByCategory } from "../../redux/productSlice";
import Product from "./Product";
import Loading from "../Loading";
import ReactPaginate from "react-paginate";
import SliderCompProducts from "./SliderCompProducts";

function Products({ categoryToDisplay,sort }) {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);

  
  console.log(sort, "sort");

  useEffect(() => {
    if (categoryToDisplay) {
      dispatch(getProductsByCategory(categoryToDisplay));
    }
    dispatch(getProducts());
  }, [dispatch, categoryToDisplay,sort]);
  return (
    <>
      <div className="w-6/7  flex flex-col mt-32 ">
      <div className="pl-16 mb-6 text-2xl font-bold  ">All Products</div>
        <SliderCompProducts products={products} productsStatus={productsStatus}/>
      </div>
    </>
  );
}

export default Products;
