import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { allProducts } from "../app/products/products";


const Products = () =>{

    const location = useLocation();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    useEffect(()=>{
        const getAllProducts = async () => {
            const response = await fetch("http://localhost:3000/nike/getAll")
            const data = await response.json();
            dispatch(allProducts(data));
        };
        getAllProducts();
  
    },[location.pathname])
    console.log(products); 

    return (
        <>
        <div>
          Hello
        </div>
        </>
        
    )
}


export default Products;