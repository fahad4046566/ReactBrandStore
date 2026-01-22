const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCT":
      let priceArr = action.payload.map((cur) => cur.price);
      let maxPrice = Math.max(...priceArr);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: {
          ...state.filters,
          maxPrice: maxPrice,
          price: maxPrice,
        },
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProduct = (a, b) => {
        if (sorting_value === "Price (Lowest)") return a.price - b.price;
        if (sorting_value === "Price (Highest)") return b.price - a.price;
        if (sorting_value === "A-Z") return a.title.localeCompare(b.title);
        if (sorting_value === "Z-A") return b.title.localeCompare(a.title);
      };

      newSortData = tempSortProduct.sort(sortingProduct);

      return {
        ...state,
        filter_products: [...newSortData],
      };
    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case "FILTER_PRODUCTS":
      const { all_products } = state;

      let tempFilterProduct = [...all_products];
      const { text, category, brand, price } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((currElem) => {
          return currElem.title.toLowerCase().includes(text.toLowerCase());
        });
      }
      if (category && category.toLowerCase() !== "all") {
        tempFilterProduct = tempFilterProduct.filter((currElem) => {
          return currElem.category.toLowerCase() === category.toLowerCase();
        });
      }

      if (brand && brand.toLowerCase() !== "all") {
        tempFilterProduct = tempFilterProduct.filter((currElem) => {
          return currElem.brand === brand;
        });
      }

      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter(
          (currElem) => currElem.price === 0,
        );
      } else {
        tempFilterProduct = tempFilterProduct.filter(
          (currElem) => currElem.price <= price,
        );
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          brand: "all",
          price: state.filters.maxPrice, 
          minPrice: state.filters.minPrice,
          maxPrice: state.filters.maxPrice,
        },
      };
    default:
      return state;
  }
};
export default reducer;
