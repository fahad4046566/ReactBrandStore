import { MdDelete } from "react-icons/md";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";

import { useCartContext } from "./context/CartContext";

const CartItem = ({ id, title, image, price, amount, max }) => {

  const { setDecrease, setIncrease, removeItem } = useCartContext();

  return (
   <div className="grid grid-cols-3 md:grid-cols-5 items-center py-6 border-b border-gray-100 px-2 md:px-0 gap-y-4">
  
  {/* 1. Item Section (Mobile: 2 columns wide | Desktop: 1 column) */}
  <div className="col-span-2 md:col-span-1 flex items-center gap-3 text-left">
    <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-50 rounded-xl shrink-0 p-2 border border-gray-100">
      <img src={image} alt={title} className="w-full h-full object-contain" />
    </div>
    <div className="flex flex-col">
      <p className="font-bold text-gray-800 text-sm md:text-base capitalize line-clamp-1">{title}</p>
      {/* Mobile par price yahan dikhayenge */}
      <p className="md:hidden text-xs text-gray-500">
        Unit: <FormatPrice price={price} />
      </p>
    </div>
  </div>

  {/* 2. Price (Desktop only) */}
  <p className="hidden md:block text-gray-600 font-medium text-center">
    <FormatPrice price={price} />
  </p>

  {/* 3. Quantity Toggle (Center) */}
  <div className="flex justify-center md:justify-center order-3 md:order-0">
    <div className="scale-90 md:scale-100">
      <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrease(id)}
      />
    </div>
  </div>

  {/* 4. Subtotal (Mobile: Align Right | Desktop: Center) */}
  <div className="text-right md:text-center pr-2 md:pr-0">
     <p className="text-xs text-gray-400 md:hidden">Subtotal</p>
     <p className="font-bold text-indigo-600 text-sm md:text-lg">
        <FormatPrice price={price * amount} />
     </p>
  </div>

  {/* 5. Remove Button */}
  <div className="flex justify-end md:justify-center items-center">
    <button 
      onClick={() => removeItem(id)}
      className="p-2 bg-red-50 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all shadow-sm"
    >
      <MdDelete className="cursor-pointer text-lg md:text-xl" />
    </button>
  </div>
</div>
  );
};

export default CartItem;
