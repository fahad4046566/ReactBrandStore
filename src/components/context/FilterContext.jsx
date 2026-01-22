import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";

const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const initialState = {
    products: [],
    all_products: [],
    filter_products: [],
    sorting_value: "Price (Lowest)",
    filters: {
      text: "",
      category: "all",
      brand: "all",
      price: 0,   
    minPrice: 0,
    maxPrice: 0,
    },
   
    
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductContext();

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });
  }, [products]);

  // Sorting apply karne ke liye (Jab bhi value change ho)
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.filters.text, state.filters.category, state.filters.brand, state.filters.price, state.sorting_value]);

  const sorting = (value) => {
    dispatch({ type: "GET_SORT_VALUE", payload: value });
  };

  const updateFilterValue = (e) => {
  let name = e.target.name;
  let value = e.target.value;
    if (name === "price") {
    value = Number(value);
  }

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  const clearFilter= () => {
    dispatch({type:"CLEAR_FILTERS"})
  }
  

  return (
    <FilterContext.Provider value={{ ...state, sorting, updateFilterValue ,clearFilter}}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContext, FilterContextProvider, useFilterContext };
