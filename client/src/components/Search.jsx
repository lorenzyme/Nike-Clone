import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../app/cart/cartSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Search = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    console.log(`added ${product.name} to cart!`);
  }

  return (
    <div>
      <button id="cart-button" onClick={() => navigate('/cart')}><AiOutlineShoppingCart /></button>

      {products.filter((product) => product.name?.includes(name)).map((product, i) => {
        return (
          <div className="product-details" key={i}>
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
