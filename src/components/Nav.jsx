import { BsCart2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useCartContext } from "./context/CartContext";

const Nav = ({ isOpen, setIsOpen }) => {
  const { totalItem } = useCartContext();

  const closeMenu = () => {
    setIsOpen(false);
  };


  const handleClick = (e) => {
    closeMenu();
    e?.stopPropagation?.();
  };

  return (
    <div>
      <ul
        className={`
          ${isOpen ? "flex" : "hidden"} 
          flex-col absolute top-full left-0 w-full bg-gray-50 p-10 gap-5 shadow-md
          md:flex md:flex-row md:static md:pl-5 md:gap-10 md:shadow-none md:w-auto
          justify-center items-center
        `}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold underline"
                : "text-gray-600 font-bold"
            }
            onClick={handleClick}
          >
            Home
          </NavLink>
        </li>
        
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold underline"
                : "text-gray-600 font-bold"
            }
            onClick={handleClick}
          >
            About
          </NavLink>
        </li>
        
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold underline"
                : "text-gray-600 font-bold"
            }
            onClick={handleClick}
          >
            Contact
          </NavLink>
        </li>
        
        <li>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold underline"
                : "text-gray-600 font-bold"
            }
            onClick={handleClick}
          >
            Products
          </NavLink>
        </li>
        
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold"
                : "text-gray-600 font-bold"
            }
            onClick={handleClick}
          >
            <div className="relative flex items-center">
              <BsCart2 className="text-3xl" />
              <span className="absolute -top-2 -right-3 text-4xl bg-orange-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {totalItem}
              </span>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;