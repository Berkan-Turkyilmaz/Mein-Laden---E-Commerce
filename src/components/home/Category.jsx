import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";
import SliderComp from "./SliderComp";

function Category({ setCategoryToDisplay, categoryToDisplay }) {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="  w-full text-black  ">
      <div className="pl-16 mb-6 text-2xl font-bold ">Explore the categories</div>
      <SliderComp
        setCategoryToDisplay={setCategoryToDisplay} categories={categories} categoryToDisplay={categoryToDisplay} />
    </div>
  );
}

export default Category;
