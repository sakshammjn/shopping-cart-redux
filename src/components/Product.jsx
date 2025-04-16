import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const Product = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed from Cart");
  };

  return (
    <div className="w-60 flex flex-col gap-3 m-4 mt-10 ml-5 rounded-xl outline items-center justify-between hover:scale-105 transition duration-300 ease-in hover:shadow-[5px_5px_rgba(15,_23,_42,_0.4),_10px_10px_rgba(15,_23,_42,_0.3),_15px_15px_rgba(15,_23,_42,_0.2),_20px_20px_rgba(15,_23,_42,_0.1),_25px_25px_rgba(15,_23,_42,_0.05)]">
  <div>
    <p className="text-gray-700 font-semibold text-lg text-left truncate w-48 h-6">{item.title}</p>
  </div>

  <div>
    <p className="w-48 text-gray-400 font-normal text-[10px] text-left h-8 overflow-hidden">
      {item.description.split(" ").slice(0, 10).join(" ") + "..."}
    </p>
  </div>

  <div className="h-[180px] flex items-center justify-center">
    <img src={item.image} alt={item.title} className="h-full object-contain" />
  </div>

  <div className="flex justify-center gap-16 items-center w-full mt-5 mb-5">
    <div>
      <p className="text-green-600 font-semibold">${item.price}</p>
    </div>

    {cart.some((p) => p.id === item.id) ? (
      <button
       className="text-gray-700 border-2 border-gray-700 rounded-full px-3 py-1 uppercase font-semibold text-[12px]
        hover:bg-gray-700 transition hover:text-white duration-300"
       onClick={removeFromCart}>Remove Item</button>
    ) : (
      <button
       className="text-gray-700 border-2 border-gray-700 rounded-full px-3 py-1 uppercase font-semibold text-[12px]
        hover:bg-gray-700 transition hover:text-white duration-300"
       onClick={addToCart}>Add to Cart</button>
    )}
  </div>
</div>
  );
};

export default Product;
