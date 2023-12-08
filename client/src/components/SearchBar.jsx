import { LuSlidersHorizontal } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { CgCheck } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");
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
