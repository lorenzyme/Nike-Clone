import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  getTotals,
  updateCart
} from "../../app/cart/cartSlice";
import { useEffect } from "react";
import axios from "axios"
import { AiTwotoneCalculator } from "react-icons/ai";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const cartItems = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = async (cartItem) => {
    const token = window.localStorage.getItem("token");
    await axios.delete(`http://localhost:3000/nike/cartItem/${cartItem.productId}`, {
      headers: {
        authorization: token,
      },
    });
    const cartItems = await axios.get("http://localhost:3000/nike/cartItem", {
      headers: {
        authorization: token,
      },
    });
    dispatch(updateCart(cartItems.data));
  };

  const handleClearCart = (cartItem) => {
    dispatch(clearCart());
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const calculateTotalCartCost = (cartItems, products) => {
    return cart.cartItems.reduce((totalCost, cartItem) => {
      const product = products.find((p) => p.id === cartItem.productId);
      if (product) {
        totalCost += product.cost * cartItem.cartQuantity;
      }
      return totalCost;
    }, 0);
  };
  const totalCartCost = calculateTotalCartCost(cartItems, products)
  console.log(totalCartCost)
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {cart.cartItems.length === 0 ? (
        <div>
          <h5>Your cart is currently empty!</h5>
        </div>
      ) : (
        <div className="cart">
          {cart.cartItems?.map((cartItem, i) => (
            <div id="cart-img" key={`cartItem${i}`}>
              <img src={products[cartItem.productId - 1].imgUrl} />
              <div id="cart-name">
                <h4>{products[cartItem.productId - 1].name}</h4>
              </div>
              <div id="cart-color">
                <h4>{products[cartItem.productId - 1].color}</h4>
              </div>
              <div id="cart-cost">
                <h4>{products[cartItem.productId - 1].cost}</h4>
              </div>
              <div id="cart-buttons"></div>
              <button onClick={() => handleRemoveFromCart(cartItem)}>-</button>
              <p>{cartItem.cartQuantity}</p>
              <button onClick={() => handleAddToCart(cartItem)}>+</button>
            </div>
          ))}
          <div>
            {`Subtotal $${totalCartCost}`}
            <h4>Taxes and shipping costs calculated at checkout</h4>
            <button>Checkout</button>
          </div>
          <br />
          <br />
          <button onClick={handleClearCart} id="empty-cart">
            Empty Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
