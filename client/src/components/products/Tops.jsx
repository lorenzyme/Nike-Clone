import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Tops = () => {
  const [tops, setTops] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const allTops = async () => {
      const response = await fetch("http://localhost:3000/nike/tops");
      const data = await response.json();
      setTops(data);
    };
    allTops();
  }, [location.pathname]);

  return (
    <>
      <div>
        <div>
          {tops.map((tops) => {
            return (
              <div className="product-info" key={tops.id}>
                <h4 id="item-name">{tops.name}</h4>
                <img id="item-img" src={tops.imgUrl} alt="product image" />
                <p id="item-desc">{tops.details}</p>
                <h4 id="size">{tops.size}</h4>
                <h4 id="item-color">{tops.color}</h4>
                <h4 id="cost">{tops.cost}</h4>

              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tops;
