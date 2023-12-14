import { useSelector, useDispatch, } from "react-redux";
import axios from 'axios'

import WishListButton from "../WishlistButton";
import { addToCart, updateCart } from "../../app/cart/cartSlice";

const Womens = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)
    const user = useSelector((state) => state.users)
    const addProductToCart = async (productId) => {
        const token = window.localStorage.getItem('token')
        const womensReponse = await fetch('http://localhost:3000/nike/cartItem/new', {
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
        const womensData = await womensReponse.json()
        const cartItems = await axios.get("http://localhost:3000/nike/cartItem", {
          headers: {
            authorization: token,
          },
        });
        dispatch(updateCart(cartItems.data))
    }
    const updateProductInCart = async (productId) => {
        const token = window.localStorage.getItem('token')
        const updatedWomensReponse = await fetch(`http://localhost:3000/nike/cartItem/${productId}`, {
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
        const updatedWomensData = await updatedWomensReponse.json()
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
        <div>
            { 
                products?.filter((product) => product.gender === "women").map((product, i) => {
                    
                    return ( 
                        <div className="product-details" key={i}>
                          <img src={`${product.imgUrl}`}/>
                          <div id='product-card'>
                            <h4>{product.name}</h4>
                            <h4>{product.cost}</h4>
                            <h4>{product.color}</h4>
                            <p>{product.details}</p>
                            <button id="add-to-cart" onClick={()=> handleAddToCart(product)}>Add To Cart</button>
                            <WishListButton productId={product.id} />
                          </div>
                        </div>
                      )
                })
            }

        </div>
    )
};


export default Womens;