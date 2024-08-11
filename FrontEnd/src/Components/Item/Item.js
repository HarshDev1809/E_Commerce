import { useEffect, useState } from "react";
import "./Item.css";
import { useNavigate } from "react-router-dom";

function Item({ item }) {
  const [inCart, setInCart] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(10);

  const navigate = useNavigate()

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  };

  const descreaseQuantity = () => {
    const newQuantity = quantity -1
    if (newQuantity <= 0) {
      setInCart(false);
    } else {
      setQuantity(newQuantity);
    }
  };

  const increaseQuantity = () => {
    const newQuantity = quantity +1
    setQuantity(newQuantity);
  };

  const handleQuantityChange = (e) => {
    if (e.target.value === 0) {
      setInCart(false);
    } else {
      setQuantity(e.target.value);
    }
  };

  const addToCart = () => {
    setInCart(true);
  };

  const openItem = ()=>{
    const id = item.itemId;
    navigate(`/item/${id}`);
  }

  return (
    <div className="item w-100 h-100" onClick={openItem}>
      <div className="picture d-flex justify-content-center">
        <img src={item.photo} />
      </div>
      <div className="like-button">
        <button type="button" onClick={toggleFavorite} className="d-flex justify-content-center align-items-center border">
          <span className={isFavorite ? "material-symbols-outlined liked" : "material-symbols-outlined"}>favorite</span>
        </button>
      </div>
      <div className="name d-flex justify-content-center">
        <span>{item.itemName}</span>
      </div>
      <div className="price d-flex justify-content-center align-items-center gap-2 ">
        <span>
          <del>{`₹${item.price}`}</del>
        </span>
        <span>{item.sellingPrice}</span>
      </div>
      <div className="add-to-cart-button border">
        {inCart ? (
          <div className="h-100">
            <button type="button" onClick={descreaseQuantity} className="h-100 w-25">
              {/* <span className="material-symbols-outlined">remove</span> */}
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="h-100 w-50 text-center"
            ></input>
            <button type="button" onClick={increaseQuantity} className="h-100 w-25">
              {/* <span className="material-symbols-outlined">add</span> */}
              +
            </button>
          </div>
        ) : (
          <button type="button" className="w-100 h-100" onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Item;
