import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {

  const { itemName } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  return (
    <>
      <h1>Search Results</h1>
      {products.map((product) => (
        <card>
          key={product.id}
          id={product.id}
          <h2>{product.itemName}</h2>
          <h3>{product.cost}</h3>
        </card>
      ))}
    </>
  );
};

export default Search;
