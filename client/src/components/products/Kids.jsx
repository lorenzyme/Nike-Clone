import { useSelector, useDispatch, } from "react-redux";
import { addToCart } from "../../app/cart/cartSlice";

const Kids = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }



    return (
        <div>
            { 
                products?.filter((product) => product.forkids === true).map((product, i) => {
                    
                    return ( 
                        <div className="product-details" key={i}>
                          <img src={`${product.imgUrl}`}/>
                          <div id='product-card'>
                            <h4>{product.name}</h4>
                            <h4>{product.cost}</h4>
                            <h4>{product.color}</h4>
                            <p>{product.details}</p>
                            <button id="add-to-cart" onClick={()=> handleAddToCart(product)}>Add To Cart</button>
                          </div>
                        </div>
                      )
                })
            }

        </div>
    )
};


export default Kids;