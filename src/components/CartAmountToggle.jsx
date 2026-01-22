
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";

const CartAmountToggle = ({amount, setDecrease, setIncrease}) => {
 

 return (
    <div className="flex items-center gap-3 my-4">
      <button 
        onClick={() => setDecrease()} 
        className="hover:text-red-600 transition-colors  hover:cursor-pointer"
      >
        <FiMinus size={20} />
      </button>
      
      <span className="text-2xl font-bold text-indigo-600 w-8 text-center">
        {amount}
      </span>
      
      <button 
        onClick={() => setIncrease()} 
        className="hover:text-green-600 transition-colors hover:cursor-pointer "
      >
        <FaPlus size={20} />
      </button>
    </div>
  );
};

export default CartAmountToggle;
