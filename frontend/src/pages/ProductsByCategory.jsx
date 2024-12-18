import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "../redux/productSlice";
import { useLocation, useParams } from "react-router-dom";
import Product from "../components/home/Product";

function ProductsByCategory() {
  const { category } = useParams();

  const location = useLocation();

  const isProductsByCategoryPatch = /^\/categories\/[^/]+\/?$/.test(
    location.pathname
  );

  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsByCategory(category));
  }, [dispatch, category]);

const firstLettertoUpperCase = (category) => {
  return category.charAt(0).toUpperCase() + category.slice(1); }




  return (
    <div>
      <div>
        <div className="pl-16 mb-6 text-2xl font-bold  mt-12">
          {firstLettertoUpperCase(category)} Items
        </div>
      </div>
      <div className="grid-cols-3 grid ">
        {products?.productsWithSuchCategory?.map((product) => (
          <div className="  mt-8" key={product._id}>
            <Product product={product} isProductsByCategoryPatch={isProductsByCategoryPatch} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsByCategory;
