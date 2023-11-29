import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch, } from "react-redux";
import { cartItems, removeFromCart } from "../../app/products/removeFromCart";



const Cart = () => {
//   const products = useSelector((state) => state.products);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} id="cart-button">
      <AiOutlineShoppingCart />
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div>
              <div className="cart">
                <ul className="cart-items">
                  {cartItems.map((product) => (
                    <li key={product.id}>
                      <div>
                        <img src={product.imgUrl} />
                      </div>
                      <div>
                        <div>{product.itemname}</div>
                        <div>
                          {product.cost}
                          {/* {product.cost} x{product.count?} */}
                          <button
                            className="button"
                            onClick={() => removeFromCart(item)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
