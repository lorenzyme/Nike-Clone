import { Link } from "react-router-dom"

const Products = ({products}) =>{

    return (

        <div className="all-products" key={products}>

            <div>
        {
            products?.map((product)=>{
                return (
                    <div className="product-info" key={product.id}>
                        <img src={`${product.imageUrl}`} />
                        <div>
                        <h4 id="product-name">{product.name}</h4>
                        <h4 id="cost">the {product.cost}</h4>
                        <Link to={/single/`${product.id}`}>
                        <button>
                            Details
                        </button>
                        </Link>
                        </div>
                    </div>

                )
            })
        }
    </div>
        </div>

    )
}

export default Products;