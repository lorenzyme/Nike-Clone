import { useSelector, useDispatch, } from "react-redux";
import { addToCart } from "../../app/cart/cartSlice";
import WishListButton from "../WishlistButton";

const Mens = (i) => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    // const handleAddToCart = async (productId) => {
    //     if (productId) {
    //       const token = window.localStorage.getItem('token');
      
    //       try {
    //         const updatedCartItemResponse = await fetch(`http://localhost:3000/nike/cartItem/${productId.id}`, {
    //           method: "PUT",
    //           headers: {
    //             authorization: token,
    //             "Content-Type": "application/json"
    //           },
    //           body: JSON.stringify({
    //             quantity: 1
    //           })
    //         });
      
    //         if (!updatedCartItemResponse.ok) {
    //             // Handle non-successful responses (e.g., log or throw an error)
    //             console.error(`Error updating cart item: ${updatedCartItemResponse.statusText}`);
    //           } else {
    //             const updatedCartItemData = await updatedCartItemResponse.json();
        
    //             // Check if the response has the expected structure
    //             if (updatedCartItemData && updatedCartItemData.quantity !== undefined) {
    //               console.log('updated cart item data:', updatedCartItemData);
    //             } else {
    //               console.error('Unexpected response format:', updatedCartItemData);
    //             }
    //           }
    //         } catch (error) {
    //           console.error('Error updating cart item:', error);
    //         }
    //     } else {
    //       // ... (unchanged code for the POST request)
    //         const token = window.localStorage.getItem('token');
    //         const newCartItemResponse = await fetch('http://localhost:3000/nike/cartItem/new', {
    //         headers: {
    //             authorization: token,
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             productId,
    //             quantity: 1
    //         }),
    //         method: "POST"
    //         })
    //         const newCartItemData = await newCartItemResponse.json()
    //         console.log('new cart item data:', newCartItemData)
    //         console.log(products)
    //         dispatch(addToCart(productId))
    //     }
       
    // }
    
    return (
        <div>
            {
                products?.filter((product) => product.gender === "men").map((product, i) => {

                    return (
                        <div className="product-details" key={i}>
                            <img src={`${product.imgUrl}`} />
                            <div id='product-card'>
                                <h4>{product.name}</h4>
                                <h4>{product.cost}</h4>
                                <h4>{product.color}</h4>
                                <p>{product.details}</p>
                                <button id="add-to-cart" onClick={() => handleAddToCart(product)}>Add To Cart</button>
                                <WishListButton productId={product.id} />
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
};


export default Mens;