const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, amount, product } = action.payload;

      let existingProduct = state.cart.find((curItem) => curItem.id === id);

      if (existingProduct) {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === id) {
            let newAmount = curElem.amount + amount;
            if (newAmount >= curElem.max) newAmount = curElem.max;
            return { ...curElem, amount: newAmount };
          }
          return curElem;
        });
        return { ...state, cart: updatedProduct };
      } else {
        const cartProduct = {
          id,
          title: product.title,
          amount,
          image: product.thumbnail,
          price: product.price,
          max: product.stock,
        };

        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }
    case "REMOVE_ITEM":
      let updatedCart = state.cart.filter(
        (curElem) => curElem.id !== action.payload,
      );
      return {
        ...state,
        cart: updatedCart,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "CART_TOTAL_ITEM":
      const updatedItemVal = state.cart.reduce((initial, elem) => {
        let { amount } = elem;
        initial = initial + amount;
        return initial;
      }, 0);
      return {
        ...state,
        totalItem: updatedItemVal,
      };

    case "SET_DECREMENT":
      let updatedProductDec = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let decAmount = curElem.amount - 1;
          if (decAmount <= 1) decAmount = 1;
          return { ...curElem, amount: decAmount };
        }
        return curElem;
      });
      return { ...state, cart: updatedProductDec };

    case "SET_INCREMENT":
      let updatedProductInc = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let incAmount = curElem.amount + 1;
          if (incAmount >= curElem.max) incAmount = curElem.max;
          return { ...curElem, amount: incAmount };
        }
        return curElem;
      });
      return { ...state, cart: updatedProductInc };

    case "CART_TOTAL_PRICE":
      let total_price = state.cart.reduce((initialVal, curElem) => {
        let { price, amount } = curElem;
        initialVal = initialVal + Number(price) * Number(amount);
        return initialVal;
      }, 0);

      return {
        ...state,
        total_amount: total_price,
      };

    default:
      return state;
  }
};
export default reducer;
