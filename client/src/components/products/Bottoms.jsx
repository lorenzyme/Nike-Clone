import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Bottoms = () => {
  const [bottoms, setBottoms] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const allBottoms = async () => {
      const response = await fetch("http://localhost:3000/nike/bottoms");
      const data = await response.json();
      setBottoms(data);
    };
    allBottoms();
  }, [location.pathname]);

  return (
    <>
      <div>
        <div>
          {bottoms.map((bottoms) => {
            return (
              <div className="product-info" key={bottoms.id}>
                <h4 id="item-name">{bottoms.name}</h4>
                <img id="item-img" src={bottoms.imgUrl} alt="product image" />
                <p id="item-desc">{bottoms.details}</p>
                <h4 id="size">{bottoms.size}</h4>
                <h4 id="item-color">{bottoms.color}</h4>
                <h4 id="cost">{bottoms.cost}</h4>

              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Bottoms;
