import { addToCart, cartItems } from "../../app/products/addToCart";

const AddToCart = () => {
  return (
    <div>
      <button id="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default AddToCart;
