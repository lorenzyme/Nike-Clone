import { useSelector, useDispatch, } from "react-redux";
import { addToCart } from "../../app/cart/cartSlice";
import WishListButton from "../WishlistButton";

const Womens = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
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