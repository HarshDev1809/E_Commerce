import { useState } from "react";
import "./ShoppingBag.css";
import CartOfferCarousel from "../CartOfferCarousel/CartOfferCarousel";

function ShoppingBag({onClose}) {
  const [itemCount, setItemCount] = useState(1);

  return (
    <div className="shopping-bag">
      <div className="header border d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-start align-items-center border gap-2">
          <h2>Cart</h2>
          <span className="fs-4 text-secondary">{itemCount}</span>
        </div>
        <button type="button" className="close-btn rounded-circle d-flex justify-content-center align-items-center" onClick={onClose(false)}>
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>
      {/* <div className="offer-section">
        <CartOfferCarousel />
      </div> */}
      <div className="items">
        
      </div>
    </div>
  );
}

export default ShoppingBag;
