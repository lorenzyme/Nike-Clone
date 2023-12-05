import { useEffect } from "react";
import { useSelector, useDispatch, } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addToCart } from "../../app/cart/cartSlice";
import { allProducts } from "../../app/products/products";

const Kids = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        console.log(`added ${product.name} to cart!`);
      }

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:3000/nike/getAll');
            const data = await response.json();
            dispatch(allProducts(data))
        };
        getData()
    }, [location.pathname]);

    const convertToArray = (productsObj) => {
        const productCategoryArrays = Object.values(productsObj)
        const productsArray = productCategoryArrays.reduce((acc, category) => {
            return [...acc, ...category];
        }, [])
       
        return productsArray;
    }
    console.log(products)
    //  const filteredProductsArray = productsArray.filter((product) => product.gender === 'kids')

    return (
        <div>
            { 
                convertToArray(products).filter((product) => product.forkids === true).map((product) => {
                    
                    return ( 
                        <div className="product-details" key={product.name}>
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