import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import { storeWishlistItems } from "../app/wishlist/wishlist";

const WishListButton = ({ productId }) => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products);
  const wishlistItems = useSelector((state) => state.wishlist)
  const [isActive, setIsActive] = useState(false);
  const onClick = async () => {
    try {
      const token = window.localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:3000/nike/wishlistItem/new`,
        {
          headers: {
            authorization: token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId,
          }),
          method: "POST",
        }
      );
      const data = await response.json();
      dispatch(storeWishlistItems(data))
      setIsActive(!isActive);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteOnClick = async () => {
    const token = window.localStorage.getItem("token");
    const deleteResponse = await fetch(
      `http://localhost:3000/nike/wishlistItem/${productId}`,
      {
        headers: {
          authorization: token,
        },
        method: "DELETE"
      }
    );
    const deleteData = await deleteResponse.json();
    setIsActive(!isActive);
  };
  return (
    <>
      <div>
        {isActive ? (
          <FaHeart onClick={deleteOnClick} />
        ) : (
          <FaRegHeart onClick={onClick} />
        )}
      </div>
    </>
  );
};

export default WishListButton;
