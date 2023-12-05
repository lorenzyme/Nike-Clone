import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../app/cart/cartSlice";

const Search = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    console.log(`added ${product.name} to cart!`);
  }

  const convertToArray = (productsObj) => {
    const productCategoryArrays = Object.values(productsObj);
    const productsArray = productCategoryArrays.reduce((acc, category) => {
      return [...acc, ...category];
    }, []);
    console.log(productsArray);
    return productsArray;
  };

  return (
    <div>
      {convertToArray(products).map((product) => {
        return (
          <div className="product-details" key={product.id}>
            <img id="product-img"
              src={
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/81694d7b-7b00-4a41-9c09-81e8ce01075c/life-mens-chore-coat-r4k91t.png"
              }
            />
            <div>
              <h4>{product.name}</h4>
              <h4>{product.cost}</h4>
              <h4>{product.color}</h4>
              <p>{product.details}</p>
              <button id="add-to-cart" onClick={()=> handleAddToCart(product)}>Add To Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// { accessories: [{},{},{}], tops: [{}, {}, {}] } products before object.values
// [[{},{},{}], [{},{},{}]] after object.values
// [{},{},{},{},{},{}] after reducing

export default Search;
