import { useState } from "react";

const Search = () => {



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
