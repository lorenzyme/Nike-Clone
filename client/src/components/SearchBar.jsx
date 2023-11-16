import { LuSlidersHorizontal } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { CgCheck } from "react-icons/cg";
import { Link } from "react-router-dom";


const SearchBar = () => {
  return (
    <>
    <div id="search-bar-container">
      <FiSearch id="search-icon" />
      <input id="search-bar" type="text" placeholder="What're you looking for?" />
      <Link to="/search">
      <CgCheck id="submit-button"/>
      </Link>
      <button><LuSlidersHorizontal id="filter-button"/></button>
    </div>

    
    </>
  );
};

export default SearchBar;
