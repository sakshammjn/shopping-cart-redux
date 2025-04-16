import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useState, useEffect } from "react";

const Cart = () => {
  const {cart} = useSelector( (state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, curr) => acc + curr.price, 0);
    setTotalAmount(parseFloat(total.toFixed(2)));
  }, [cart]);

  return (
    <div className="flex items-center mx-auto gap-x-2 justify-between max-w-6xl mb-5">
      {
        cart.length > 0 ? 
         (<div className="flex ">

            <div>
              {
                cart.map ((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>

              <div className="flex flex-col mt-5 justify-between h-[80vh] ml-10 sticky top-5 left-[70vw]">
                <div>
                  <div className="text-green-600 text-2xl font-semibold">
                    Your Cart
                  </div>
                  <div className="text-green-600 text-5xl font-extrabold mb-6 mt-3">
                    Summary
                  </div>
                  <p>
                    <span className="text-[18px]">Total Items : {cart.length}</span>
                  </p>
                </div>

                <div>
                  <p className="font-lightbold py-5 text-[18px]">Total Amount : <span className="font-extrabold">${totalAmount}</span></p>
                  <button
                   className="flex justify-center items-center mx-auto my-auto bg-green-700 w-full py-2 text-[18px] rounded-lg font-bold text-white hover:scale-110 transition duration-300"
                   >
                   Checkout Now
                  </button>
                </div>
              </div>
              

         </div>) :
         (<div className='flex flex-col gap-16 justify-center items-center w-[80vw] h-[80vh] text-3xl'>
            <h2 className="font-bold">Cart Empty</h2>
            <Link to={"/"}>
              <button
               className="flex justify-center items-center mx-auto my-auto bg-[#0F172A] px-8 py-2 text-[18px] rounded-lg font-bold text-white hover:scale-110 transition duration-300">
                Shop Now 
              </button>
            </Link>
         </div>)
      }
    </div>
  )
};

export default Cart;
