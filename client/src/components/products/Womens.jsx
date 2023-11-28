import { useEffect } from "react";
import { useSelector, useDispatch, } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { allProducts } from "../../app/products/products";

const Kids = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)

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
                convertToArray(products).filter((product) => product.gender === "women").map((product) => {
                    
                    return ( 
                        <div className="product-details" key={product.id}>
                          <img src={`${product.imageUrl}`}/>
                          <card id='product-card'>
                            <h4>{product.itemname}</h4>
                            <h4>{product.cost}</h4>
                            <h4>{product.color}</h4>
                            <p>{product.details}</p>
                          </card>
                        </div>
                      )
                })
            }

        </div>
    )
};


export default Kids;