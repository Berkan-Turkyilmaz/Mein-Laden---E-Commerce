import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/CartComp";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function Cart() {
  const dispatch = useDispatch();
  const { carts, itemCount, totalAmount } = useSelector((state) => state.carts);
  const { quantity, setQuantity } = useState(1);

  useEffect(() => {
    dispatch(getCartTotal(carts));
  }),
    [dispatch, carts];
  console.log(quantity, "carts", carts, totalAmount, itemCount);

  return (
    <div className="flex justify-center mt-20">
    <div className="flex  w-4/5 font-semibold bg-gray-100 ">
      <div className="p-12 pl-36 w-3/4  ">
        <div className="w-6/7 pb-4 flex justify-between border-b border-solid border-black">
          <div className="text-2xl">
            <h1>Shopping Cart</h1>
          </div>
        </div>
        <div className="w-6/7">
          <div className="w-full grid-cols-2  grid relative   mt-8 ">
            <div>
              <div className="w-full ">
                <span>Product Details</span>
              </div>
            </div>
            <div className="flex gap-32 pl-16 w-full  ">
              <div>Quantity</div>
              <div>Price</div>
              <div>Total</div>
            </div>
          </div>
          <div className=" mt-2">
            {carts?.length < 1 ? (
              <div>
                <div className="text-2xl mt-24 ">
                  <h1>Cart is empty</h1>
                </div>
              </div>
            ) : (
              carts?.map((cart) => (
                <CartComp className="w-3/4" key={cart.id} cart={cart} />
              ))
            )}
          </div>
          <div>
            <div className=" gap-2 mt-16 text-blue-700  ">
              <Link to="/" className="flex gap-2 items-center cursor-pointer">
                <FaArrowLeftLong />
                Continue to shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/4 p-12 pl-20 bg-gray-200 sticky ">
        <div className="text-2xl pb-4 border-b border-solid border-black w-full  ">
          <h1>Order Summary</h1>
        </div>
        <div className="flex-col flex gap-6 mt-10">
          <div>{itemCount} Items</div>
          <div>Delivery:</div>

          <div className="flex gap-2">
            Promo Code:
            <input
              type="text"
              className="w-40 rounded-sm outline-none"
              placeholder="Enter code"
              name=""
              id=""
            />
          </div>
        </div>

        <div className="mt-8   border-t  w-full border-solid border-black ">
          <div className="font-bold mt-4">
            Total Cost: {totalAmount.toFixed(2)}$
          </div>
        </div>
        <div className="w-full flex justify-center p-2 rounded-lg mt-4 bg-[#5C51DB]">
          <button>Checkout</button>
        </div>
      </div>
    </div></div>
  );
}

export default Cart;
