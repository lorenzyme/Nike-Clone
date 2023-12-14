import { useSelector, useDispatch, } from "react-redux";
import axios from 'axios'
import { DiGithubFull } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { addToCart, updateCart } from "../../app/cart/cartSlice";
import WishListButton from "../WishlistButton";
import "../../Styles.css";

const Mens = (i) => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)
    const user = useSelector((state) => state.users)
    const addProductToCart = async (productId) => {
        const token = window.localStorage.getItem('token')
        const mensReponse = await fetch('http://localhost:3000/nike/cartItem/new', {
            headers: {
                authorization: token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                quantity: 1,
                productId,
                user: user.cartId
            }),
            method: "POST"
        })
        console.log(productId)
        // console.log(productId)
        const mensData = await mensReponse.json()
        const cartItems = await axios.get("http://localhost:3000/nike/cartItem", {
          headers: {
            authorization: token,
          },
        });
        dispatch(updateCart(cartItems.data))
    }
    const updateProductInCart = async (productId) => {
        const token = window.localStorage.getItem('token')
        const mensReponse = await fetch(`http://localhost:3000/nike/cartItem/${productId}`, {
            headers: {
                authorization: token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                quantity: 1,
                productId,
                user: user.cartId
            }),
            method: "PUT"
        })
        const updatedMensData = await mensReponse.json()
        const cartItems = await axios.get("http://localhost:3000/nike/cartItem", {
          headers: {
            authorization: token,
          },
        });
        dispatch(updateCart(cartItems.data))
    }
    

    const handleAddToCart = (product) => {
        console.log(product)
        dispatch(addToCart(product))
        updateProductInCart(product.id)
        addProductToCart(product.id)
    }
       
    
    
    return (
        <>
        <div>
            {
                products?.filter((product) => product.gender === "men" && product.forkids === false).map((product, i) => {

                    return (
                        <div className="product-details" key={i}>
                            <img id="productImages"
                            src={`${product.imgUrl}`} />
                            <div id='product-card'>
                                <h4>{product.name}</h4>
                                <h3>${product.cost}</h3>
                                <button id="add-to-cart" onClick={() => handleAddToCart(product)}>Add To Cart</button>
                                <WishListButton productId={product.id} />
                            </div>
                        </div>
                    )
                })
            }

        </div>
        <div id="footer">
        <ul className="social">
          <li>
            <a id="gh-button" href="https://github.com/lorenzyme/Nike-Clone">
              <FaGithub />
              <DiGithubFull />
            </a>
          </li>
        </ul>
        <ul>
          <li className="footer-item">
            <a className="footer-links" href="#">
              Home
            </a>
          </li>
          <li className="footer-item">
            <a className="footer-links" href="#">
              Support
            </a>
          </li>
          <li className="footer-item">
            <a className="footer-links" href="#">
              Team
            </a>
          </li>
          <li className="footer-item">
            <a className="footer-links">Contact</a>
          </li>
        </ul>
        <div id="label-f">
        <h2 id="label-f">FIND A NEARBY STORE</h2>
        <br />
        <h2 id="label-f">BECOME A MEMBER</h2>
        <br />
        <h2 id="label-f">ALREADY A MEMBER</h2>
        <br />
        <h2 id="label-f">SIGNUP FOR EMAIL</h2>
        <br />
        <h2 id="label-f">SEND US FEEDBACK</h2>
        <br />
        <h2 id="label-f">GET HELP</h2>
        <br />
        </div> 
        <br />
        <div id="light-f">
          <h3>Order Status</h3>
          <br />
          <h3>Returns</h3>
          <br />
          <h3>Gifts</h3>
          <br />
          <h3>Careers</h3>
          <br />
        </div>
      </div>
        </>
    )
};


export default Mens;