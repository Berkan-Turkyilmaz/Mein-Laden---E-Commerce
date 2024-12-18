import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cartSlice";
import { RiDeleteBin2Fill } from "react-icons/ri";
import toast from "react-hot-toast";

function CartComp({ cart }) {
  const dispatch = useDispatch();

  const deleteFromCart = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Product removed from cart");
  }

  console.log("cart", cart);
  return (
    <div className="w-full  mt-4 grid grid-cols-2  ">
      <div className="flex  gap-4 items-center text-xl font-semibold   ">
        <div className="relative ">
          <div className="absolute top-20 -left-20">
            <div onClick={() => deleteFromCart(cart?.id)} className="border border-solid border-gray-400 p-1"><RiDeleteBin2Fill  /></div>
            
          </div>
          <img
            src={cart?.image}
            className="w-[150px] min-w-[150px] h-48   "
            alt=""
          />
        </div>
        <div>{cart?.title}</div>
      </div>
      <div className="grid grid-cols-3 gap-24 justify-center items-center pl-20">
        <div className="flex gap-1">
          <button onClick={() => dispatch(decreaseQuantity(cart?.id))}>
            -
          </button>
          {cart?.quantity}
          <button onClick={() => dispatch(increaseQuantity(cart?.id))}>
            +
          </button>
        </div>
        <div>{cart?.price}$</div>
        <div>{(cart?.price * cart?.quantity)?.toFixed(2)}. $</div>
      </div>
    </div>
  );
}

export default CartComp;
