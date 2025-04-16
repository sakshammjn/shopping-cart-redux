import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {cart} = useSelector( (state) => state);
  return(
    <div >
      <nav className="flex justify-between items-center mx-auto h-20 max-w-6xl">
        <NavLink to='/'>
        <div className="ml-5 flex items-center space-x-6">
          
          <img src="/logo.png" className="h-14" />
          <span className=" text-slate-100 font-knewave text-4xl" >Shopnetic</span>
        </div>
        </NavLink>
       

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>
              Home
            </p>
          </NavLink>
          
          <NavLink to="/cart">
            <div className="relative"> 
              <FaCartShopping className="text-2xl"/>  
              {
                 cart.length > 0 && 
                 <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
              }
                      
            </div>
          </NavLink>          
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
