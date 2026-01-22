import { BsCart2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useCartContext } from "./context/CartContext";

const Nav = ({isOpen}) => {
  const {totalItem} = useCartContext()
  return (
    <>
      <div>
       <ul className={`
      /* Mobile Styles: Jab menu open ho to dikhao, warna hide karo */
      ${isOpen ? "flex" : "hidden"} 
      flex-col absolute top-full left-0 w-full bg-gray-50 p-10 gap-5 shadow-md
      
      /* Desktop Styles: md: se agay sab normal ho jayega */
      md:flex md:flex-row md:static md:pl-5 md:gap-10 md:shadow-none md:w-auto
      justify-center items-center
    `}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold underline"
                : "text-gray-600 font-bold"
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold underline"
                : "text-gray-600 font-bold"
            }
          >
            <li>About</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold underline"
                : "text-gray-600 font-bold"
            }
          >
            <li>Contact</li>
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold underline"
                : "text-gray-600 font-bold"
            }
          >
            <li>Products</li>
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "text-gray-600 font-bold"
            }
          >
            <li className="relative flex items-center">
              <BsCart2 className="text-3xl" />
              <span className="absolute -top-2 -right-3 text-4xl bg-orange-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {totalItem}
              </span>
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Nav;
Nav;
