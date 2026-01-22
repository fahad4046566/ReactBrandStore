import { NavLink,useNavigate } from "react-router-dom";
import CartItem from "./components/CartItem";
import { useCartContext } from "./components/context/CartContext";
import FormatPrice from "./Helpers/FormatPrice";

const Cart = () => {
  const { cart, clearCart, total_amount, shipping_fee } = useCartContext();
  const navigate = useNavigate();
  const handleCheckout = () => {
    try {
      navigate("/order-success");

      setTimeout(() => {
        clearCart();
      }, 100);
    } catch (error) {
      console.error("Navigation failed:", error);
    }
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <NavLink to="/product">
          <button className="hover:cursor-pointer bg-indigo-600 text-white px-6 py-2 rounded">
            Shop Now
          </button>
        </NavLink>
      </div>
    );
  }
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header - Desktop only */}
      <div className="hidden md:grid grid-cols-5 bg-gray-50 p-4 rounded-t-xl border-b border-gray-200 text-center font-bold text-gray-600 uppercase text-xs tracking-wider">
        <p className="text-left">Item</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
        <p>Remove</p>
      </div>

      {/* Cart Items List */}
      <div className="bg-white rounded-b-xl shadow-sm border border-gray-100 mb-8">
        {cart.map((currElem) => {
          return <CartItem key={currElem.id} {...currElem} />;
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mb-12">
        <NavLink to="/product">
          <button className="hover:bg-indigo-700 px-6 py-2 border-2 border-indigo-600 text-indigo-600 font-bold rounded-lg hover:cursor-pointer hover:text-white transition-all">
            Continue Shopping
          </button>
        </NavLink>
        <button
          onClick={clearCart}
          className=" px-6 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-700 hover:cursor-pointer shadow-md transition-all"
        >
          Clear Cart
        </button>
      </div>

      {/* Order Summary Card */}
      <div className="flex justify-end">
        <div className="w-full md:w-96 bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-4">
          <div className="flex justify-between text-gray-600">
            <p>Subtotal</p>
            <p className="font-medium text-gray-900">
              <FormatPrice price={total_amount || 0} />
            </p>
          </div>
          <div className="flex justify-between text-gray-600">
            <p>Shipping Fee</p>
            <p className="font-medium text-gray-900">
              <FormatPrice price={shipping_fee || 0} />
            </p>
          </div>
          <div className="border-t border-gray-200 pt-4 flex justify-between items-center text-xl font-bold text-gray-900">
            <p>Order Total</p>
            <p className="text-indigo-600">
              <FormatPrice price={(total_amount || 0) + (shipping_fee || 0)} />
            </p>
          </div>

          <button
            onClick={handleCheckout}
            className="hover:cursor-pointer w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all mt-4"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
