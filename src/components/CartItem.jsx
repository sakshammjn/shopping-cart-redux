import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success('Item Removed');
  }

  return (
    <div className="">
    <div className="flex items-center justify-center max-w-3xl p-6  border-b-2 lg:w-[720px] md:w-[520px] sm:w-[490px]">
      <div className="  w-60 flex items-center justify-center">
        <img src={item.image} className="h-[180px] flex items-center justify-center"/>
      </div>
      <div className="w-[480px]">
        <h1 className="text-gray-700 font-extrabold text-[20px] text-left">{item.title}</h1>
        <h1 className="w-full text-gray-400 font-normal text-[14px] text-left mt-5 mb-5">{item.description.split(" ").slice(0, 50).join(" ") + "..."}</h1>
        <div className="flex items-center justify-between">
          <p className="text-green-600 text-[18px] font-extrabold">${item.price}</p>
          <div 
            onClick={removeFromCart}
            className="scale-125 bg-red-200 text-red-500 text-s w-7 h-7 flex justify-center items-center rounded-full cursor-pointer hover:scale-150 transition duration-300">
            
            <AiFillDelete />
          </div>
        </div>

      </div>
    </div>
      
    </div>
  )
};

export default CartItem;
