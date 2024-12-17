import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { BsShop } from "react-icons/bs";

function NavbarMiddle() {
  const dispatch = useDispatch();
  const { carts, itemCount } = useSelector((state) => state.carts);
  const { categories } = useSelector((state) => state.category);
  const navigate = useNavigate();
  const [categoryToDisplay, setCategoryToDisplay] = useState(null);

  const goToCategory = (category) => {
    setCategoryToDisplay(category);
    navigate(`/category/${category}`);
  };

  useEffect(() => {
    dispatch(getCartTotal(carts));
  }, [dispatch, carts]);
  return (
    <div className="flex justify-between pl-20 bg-white items-center">
      <div className="cursor-pointer">
        <BsShop onClick={() => navigate("/")} size={30} />
      </div>
      <div className="flex gap-6 font-semibold border-l border-solid ml-32 pl-4 ">
        {categories?.map((category) => (
          categoryToDisplay === category ? (
            <div
             key={category} onClick={() => goToCategory(category)}
              className="border-r border-solid pr-4 font-bold"
            >
              {category}
            </div>
          ) : (
            <div key={category} className="border-r border-solid pr-4 "
            onClick={() => navigate(`/category/${category}`)}>
              {category}
            </div>
          )
        ))}
      </div>
      <div className="flex space-x-6 p-6 items-center  justify-end  ">
        <div className="flex p-2  rounded-xl border border-solid bg-gray-100 ">
          <input
            className="outline-none bg-gray-100"
            type="text"
            placeholder="Search for items.."
          />
          <IoSearchOutline color="black" size={30} />
        </div>

        <IoIosHeartEmpty color="black" size={30} />
        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer "
        >
          <div className="absolute -top-5 -right-3 bg-black rounded-full w-7 h-7 text-white flex items-center justify-center ">
            {itemCount}
          </div>
          <SlBasket color="black" size={30} />
        </div>
      </div>
    </div>
  );
}

export default NavbarMiddle;
