const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "MY_API":
      const featureData = action.payload.filter((curElem) => {
        return curElem.rating > 4.7;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "API_ERROR":
      return { ...state, isLoading: false, isError: true };
    default:
      return state;

    // case "SET_SINGLE_LOADING":
    //   return { ...state, isSingleLoading: true };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return { ...state, isLoading: false, isError: true };
  }
};

export default reducer;
