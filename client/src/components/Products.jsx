// import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Products = () => {

    const [products, setProducts] = useState({});

    const fetchProducts = async () => {

    let DATABASE_URL =
      "postgresql://postgres:$hadow10510@localhost:8008/Nike?schema=public";

    try {

       const response = await axios.get(`${DATABASE_URL}`);
       const data = await response.json();
        setProducts(data);
        console.log(data);

    } catch (e) {
      console.log(e);
    }
    fetchProducts();
  };
  return (
  <>
    <div>
        {products.id}
    </div>
  </>
  )

};

// in frontend fetch call to "nike"
// backend with query everything and combine into array or obj and send back to frontend (gets all tables)
// filter thru products using .filter for each type of product

export default Products;
