import { LuSlidersHorizontal } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { CgCheck } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { useState } from "react";

const SearchBar = () => {

  const navigate = useNavigate();
  const client = axios.create({
    baseURL: 'http://localhost:3000/nike/getAll'
  })

  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const getData = async (value) => {
    const response = await client.get('?_limit=20');
    response.json(response);
    console.log(response);
    const results = response.filter((product) => {
      return value && product && product.itemName && product.itemName.toLowerCase().includes(value);
    });
    console.log(results);
    setResults(results);
    navigate('/search');
 
  };

  const handleChange = (value) => {
    setInput(value);
    getData(value);
  };


  return (
    <>
    <div id="search-bar-container">
      <FiSearch id="search-icon" />
      <input id="search-bar" type="text" placeholder="What're you looking for?" value={input} onChange={(e) => handleChange(e.target.value)} />
      <Link to="/search">
      <CgCheck id="submit-button"/>
      </Link>
      <button><LuSlidersHorizontal id="filter-button"/></button>
    </div>

    
    </>
  );
};

export default SearchBar;
