import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const getLocalCartData = () => {
    const newCartData = localStorage.getItem("key");
    if (newCartData === "[]") {
      return [];
    } else {
      return JSON.parse(newCartData);
    }
  };

  const initialState = {
    cart: getLocalCartData(),
    total_item: "",
    total_amount: 0,
    shipping_fee: 2,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(state.cart));
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
  }, [state.cart]);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartContextProvider, useCartContext };
