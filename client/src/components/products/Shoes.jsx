import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Shoes = () => {
  const [shoes, setShoes] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const allShoes = async () => {
      const response = await fetch("http://localhost:3000/nike/shoes");
      const data = await response.json();
      setShoes(data);
    };
    allShoes();
  }, [location.pathname]);

  return (
    <>
      <div>
        <div>
          {shoes.map((shoes) => {
            return (
              <div className="product-info" key={shoes.id}>
                <h4 id="item-name">{shoes.name}</h4>
                <img id="item-img" src={shoes.imgUrl} alt="product image" />
                <p id="item-desc">{shoes.details}</p>
                <h4 id="size">{shoes.size}</h4>
                <h4 id="item-color">{shoes.color}</h4>
                <h4 id="cost">{shoes.cost}</h4>

              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shoes;
