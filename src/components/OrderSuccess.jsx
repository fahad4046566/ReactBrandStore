import { NavLink } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <div className="text-7xl mb-6 animate-bounce">🎉</div>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Thank you for your purchase. We've received your order and are getting it ready for shipment.
      </p>
      <NavLink to="/product">
        <button className="hover:cursor-pointer bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition-all shadow-lg">
          Continue Shopping
        </button>
      </NavLink>
    </div>
  );
};

export default OrderSuccess;