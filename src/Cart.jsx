import { NavLink } from "react-router-dom";
import CartItem from "./components/CartItem";
import { useCartContext } from "./components/context/CartContext";
import FormatPrice from "./Helpers/FormatPrice";

const Cart = () => {
  const { cart, clearCart, total_amount, shipping_fee } = useCartContext();

  if (cart.length === 0) {
    return <div>Your Cart is Empty</div>;
  }
 return (
  <div className="max-w-6xl mx-auto px-4 py-10">
    {/* Header Section */}
    <div className="hidden md:grid grid-cols-5 py-4 bg-gray-50 rounded-t-xl text-center text-gray-500 font-bold uppercase tracking-wider text-xs border-b border-gray-200">
      <p className="text-left px-4">Item</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Subtotal</p>
      <p>Remove</p>
    </div>

    {/* Cart Items List */}
    <div className="bg-white rounded-b-xl shadow-sm">
      {cart.map((currElem) => (
        <CartItem key={currElem.id} {...currElem} />
      ))}
    </div>

    {/* Action Buttons Section */}
    <div className="flex justify-between items-center mt-8 px-2">
      <NavLink to="/products">
        <button className="hover:cursor-pointer px-6 py-2 border-2 border-indigo-600 text-indigo-600 font-bold rounded-lg hover:bg-indigo-600 hover:text-white transition-all">
          Continue Shopping
        </button>
      </NavLink>
      <button 
        onClick={clearCart}
        className="px-6 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-700 shadow-md active:scale-95 transition-all hover:cursor-pointer"
      >
        Clear Cart
      </button>
    </div>

    {/* Order Summary (The Bill Box) */}
    <div className="flex justify-end mt-12">
      <div className="w-full md:w-80 bg-gray-50 p-6 rounded-2xl shadow-inner space-y-4 border border-gray-200">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal:</span>
          <span className="font-semibold text-gray-900">
            <FormatPrice price={total_amount} />
          </span>
        </div>
        <div className="flex justify-between text-gray-600 pb-4 border-b">
          <span>Shipping Fee:</span>
          <span className="font-semibold text-gray-900">
            <FormatPrice price={shipping_fee} />
          </span>
        </div>
        <div className="flex justify-between text-xl font-bold text-gray-900">
          <span>Total:</span>
          <span className="text-indigo-600">
            <FormatPrice price={shipping_fee + total_amount} />
          </span>
        </div>
      </div>
    </div>
  </div>
);
};

export default Cart;
