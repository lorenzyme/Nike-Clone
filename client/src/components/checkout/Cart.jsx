import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../app/cart/cartSlice";

const Cart = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <br />
      <br />
      {cart.cartItems.length === 0 ? (
        <div>
          <h5>Your cart is currently empty!</h5>
          <Link Start Shopping to="/" />
        </div>
      ) : (
        <div className="cart">
          {cart.cartItems?.map((cartItem) => (
            <div id="cart-img">
              <img src={cartItem.imgUrl} />
              <div id="cart-name">
                <h4>{cartItem.name}</h4>
              </div>
              <div id="cart-color">
                <h4>{cartItem.color}</h4>
              </div>
              <div id="cart-cost">
                <h4>{cartItem.cost}</h4>
              </div>
              <div id="cart-buttons"></div>
              <button onClick={() => handleRemoveFromCart(cartItem)}>-</button>
              <p>{cartItem.cartQuantity}</p>
              <button onClick={() => handleAddToCart(cartItem)}>+</button>
            </div>
          ))}
          <div>
            Subtotal ${cart.cartTotalCost}
            <h4>Taxes and shipping costs calculated at checkout</h4>
            <button>Checkout</button>
          </div>
          <br />
          <br />
          <button id="empty-cart">Empty Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
