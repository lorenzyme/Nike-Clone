import { LuSlidersHorizontal } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { CgCheck } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { allProducts } from "../app/products/products";
import { useDispatch } from "react-redux";

const SearchBar = () => {

  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await fetch("http://localhost:3000/nike/getAll");
      const data = await response.json();
      dispatch(allProducts(data));
    };
    getAllProducts();
  }, [location.pathname]);


  //   return value && product && product.itemName && product.itemName.toLowerCase().includes(value);


  const handleChange = (value) => {
    setInput(value);
  };

  return (
    <>
      <div id="search-bar-container">
        <FiSearch id="search-icon" />
        <input
          id="search-bar"
          type="text"
          placeholder="What're you looking for?"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <Link to={`/search/${input}`}>
          <CgCheck id="submit-button" />
        </Link>
        <button>
          <LuSlidersHorizontal id="filter-button" />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
