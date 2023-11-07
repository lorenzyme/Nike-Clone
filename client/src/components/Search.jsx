import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Products from "./Products";

const Search = () => {
    
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (product.trim() !== "") {
      navigate(`/search/${encodeURIComponent(searchInput)}`);
    }
  };



  return (
    <div>
      <div id="searchDiv">
        <h1 id="search">Product Search</h1>
        <input
          id="searchbox"
          type="text"
          placeholder="Find a product"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <div>
          {searchInput ? <Products products={filteredProducts} /> : null}
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default Search;
