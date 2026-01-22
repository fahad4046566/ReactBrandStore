import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const initialValue = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    singleProduct: {},
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  useEffect(() => {
    const url = "https://dummyjson.com/products";

    const getProducts = async () => {
      try {
        dispatch({ type: "SET_LOADING" });
        const res = await fetch(url);
        const data = await res.json();
        dispatch({ type: "MY_API", payload: data.products });
      } catch (error) {
        console.error("Fetching error: ", error.message);
        dispatch({ type: "API_ERROR" });
      }
    };

    getProducts();
  }, []);

  const getSingleProduct = async (id) => {
    dispatch({ type: "SET_LOADING" });
    const url = `https://dummyjson.com/products/${id}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: data });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useProductContext };
