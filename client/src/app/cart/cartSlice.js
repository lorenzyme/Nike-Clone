import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalCost: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ****** this is an action ******* & ****** action.payload is a product ******
    addToCart(state, action) {
      // using findIndex to see whether or not we have the item in the cart
      // by using the products id and storing it
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

      // checking if we already have an item of the same type in the cart
      // if we do then we can update the quantity of that specific item
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {

        // updates how many items are in the cart
        const addedProduct = { ...action.payload, cartQuantity: 1 };
        // pushing the item to the cart regularly without updating the amount
        // while also adding the cart quantity property to the item
        state.cartItems.push(addedProduct);

      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
