import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Products = () =>{
    const [products, setProducts] = useState([])
    const [wishlist, setWishlist] = useState([])

    const location = useLocation();

    useEffect(()=>{
        const getAllProducts = async () => {
            const response = await fetch("http://localhost:3000/nike/products/")
            const data = await response.json();
            console.log(response)
            setProducts(data);
            const token = window.localStorage.getItem('token')
            const wishlistResponse = await fetch("http://localhost:3000/nike/wishlistItem/", {
              headers: {
                authorization: token,
              }
            });
            const wishlistData = await wishlistResponse.json();
            setWishlist(wishlistData);
        };
        getAllProducts();
  
    },[location.pathname])
    console.log(products); 

    return (
        <>
        <div>
            {/* {products.map((product) => {
                return (
                    <div>
                        {product.itemname}
                        {product.id}

                    </div>
                )
            })} */}
             {wishlist.map((wishlist) => {
                return (
                    <div>
                        {products[wishlist?.productId-1].itemname}
                        

                    </div>
                )
            })}
        </div>
        </>
        
    )
}


export default Products;