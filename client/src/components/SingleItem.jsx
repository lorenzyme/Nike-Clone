import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"


let DATABASE_URL="postgresql://postgres:$hadow10510@localhost:8008/Nike?schema=public"


const SingleItem = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    useEffect(()=>{
      const getProducts = async () => {
        const response = await fetch(`${DATABASE_URL}/products/${id}`)
        const data = await response.json();
        setProduct(data.data.product)
      }
      getProducts();
    },[])

    
    
    return (
    <div className="title">
        <h1 className="title">{ product.name }</h1>

        <img src={`${product.imageUrl}`} />
        <p id="product-details">{product.details}</p>
        <h4 id="cost">${product.cost}</h4>
        <h4 id="color"> Color : [{product.color}]<p/></h4>
        <h4> Sizes : {product.size}</h4>
        <h4> For Kids : {product.forkids}</h4>
        {/* <h4> ID : {product.id}</h4> */}

    </div>
    )
                
}
export default SingleItem;