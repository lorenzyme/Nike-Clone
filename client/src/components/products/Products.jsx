import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Products = () =>{
    const [products, setProducts] = useState({obj:[]})

    const location = useLocation();

    useEffect(()=>{
        const getAllProducts = async () => {
            const response = await fetch("http://localhost:3000/nike/products/")
            const data = await response.json();
            setProducts(data);
        };
        getAllProducts();
  
    },[location.pathname])
    console.log(products); 

    return (
        <>
        <div>
            {products.map((product))}
        </div>
        </>
        
    )
}


export default Products;