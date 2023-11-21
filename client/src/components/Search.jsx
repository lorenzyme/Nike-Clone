import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../app/products/products";

const Search = () => {
  const { itemName } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await fetch("http://localhost:3000/nike/getAll");
      const data = await response.json();
      dispatch(allProducts(data));
    };
    getAllProducts();
  }, [location.pathname]);
  // console.log(products);

  const convertToArray = (productsObj) => {
    const productCategoryArrays = Object.values(productsObj)
    const productsArray = productCategoryArrays.reduce((acc, category)=>{
      return [...acc, ...category]; 
    }, []) 
    console.log(productsArray);
    return productsArray;
  }

  return (
    <div>
      {convertToArray(products).map((product) => {
        return ( 
          <div className="product-details" key={product.id}>
            <img src={`${product.imageUrl}`}/>
            <div>
              <h4>{product.itemname}</h4>
              <h4>{product.cost}</h4>
              <h4>{product.color}</h4>
              <p>{product.details}</p>
            </div>
          </div>
        )
      })}
    </div>
  );
};

// { accessories: [{},{},{}], tops: [{}, {}, {}] } products before object.values
// [[{},{},{}], [{},{},{}]] after object.values
// [{},{},{},{},{},{}] after reducing

export default Search;
