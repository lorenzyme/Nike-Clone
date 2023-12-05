// import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";

const Wishlist = () => {

  const products = useSelector((state) => state.products);

  const onClick = async (event) => {
    event.preventDefault();

    const response = await axios.post('http://localhost:3000/nike/wishlist/newItem',
      {
        poop: "stinks",
        name: "Item 1"
      },
      {
        headers: {
          authorization: window.localStorage.getItem('token'),
        },
      }
    );
  };

  return (
    <>
    <button onClick={onClick}>Test</button>
    </>
  );
};

export default Wishlist;