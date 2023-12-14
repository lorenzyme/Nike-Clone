import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
        toast.info(`added another ${action.payload.name} to cart!`,
        { position: "bottom-right" });
      } else {

        // updates how many items are in the cart
        const addedProduct = { ...action.payload, cartQuantity: 1 };
        // pushing the item to the cart regularly without updating the amount
        // while also adding the cart quantity property to the item
        state.cartItems.push(addedProduct);
        toast.success(`${action.payload.name} added to cart!`,
        { position: "bottom-right" });

      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));

    },
    removeFromCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      //  removes item by decreasing quantity
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.error(`${action.payload.name} removed from cart`, {
          position: "bottom-left",
        });
        // if the amount of items is 1 and it needs to be removed completely
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;

        toast.error(`${action.payload.name} removed from cart`, {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
        
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart Emptied!", { position: "bottom-left" });
  },
  updateCart(state, action) {
    state.cartItems = action.payload.cartItems
    state.cartTotalQuantity = action.payload.cartTotalQuantity
  },
  

  getTotals(state, action) {
    let { total, quantity } = state.cartItems.reduce(
      (cartTotal, cartItem) => {
        const { cost, cartQuantity } = cartItem;
        const itemTotal = cost * cartQuantity;

        cartTotal.total += itemTotal;
        cartTotal.quantity += cartQuantity;

        return cartTotal;
      },
      {
        total: 0,
        quantity: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    state.cartTotalQuantity = quantity;
    state.cartTotalCost = total;
  }
  },
});

export const { addToCart, removeFromCart, clearCart, getTotals, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
