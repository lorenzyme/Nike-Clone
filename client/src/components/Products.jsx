// import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Products = () => {

    const [products, setProducts] = useState({});

    const fetchProducts = async () => {

      //  DATABASE_URL goes here from env

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
        {/* {products.data.accessories.name} */}
    </div>
  </>
  )

};


export default Products;
