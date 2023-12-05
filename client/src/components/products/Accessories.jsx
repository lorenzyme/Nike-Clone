import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Accessories = () => {
  const [accessories, setAccessories] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const allAccessories = async () => {
      const response = await fetch("http://localhost:3000/nike/accessories");
      const data = await response.json();
      setAccessories(data);
      console.log(data);
    };
    allAccessories();
  }, [location.pathname]);

  return (
    <>
      <div>
        <div>
          {accessories.map((accessories) => {
            return (
              <div className="product-info" key={accessories.id}>
                <h4 id="item-name">{accessories.name}</h4>
                <img id="item-img" src={accessories.imgUrl} alt="product image" />
                <p id="item-desc">{accessories.details}</p>
                <h4 id="size">{accessories.size}</h4>
                <h4 id="item-color">{accessories.color}</h4>
                <h4 id="cost">{accessories.cost}</h4>

              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Accessories;
