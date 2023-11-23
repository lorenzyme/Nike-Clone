import { useSelector } from "react-redux";


const Products = () =>{

    const products = useSelector((state) => state.products);
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