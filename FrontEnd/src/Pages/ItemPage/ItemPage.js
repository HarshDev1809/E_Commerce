import { useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import { Rating } from "@mui/material";
import { useState } from "react";

function ItemPage() {
  const { id } = useParams();
  const [rating, setRating] = useState(3.5);

  return (
    <div className="item-page">
      <NavBar />
      <div className="page-section">
        <div className="image-section h-100 w-50 border">
        </div>
        <div className="info-section border h-100 w-50">
          <div>
            <h1>diamond women ring</h1>
          </div>
          <div>
            <Rating
              name="half-rating-read"
              value={rating}
              precision={0.5}
              readOnly
            />
          </div>
          <div>
            <span>
              <del>₹ 1000</del>
            </span>
            <span>₹ 980</span>
            <span>Tax included. Shipping calculated at checkout.</span>
          </div>
          <div>
            <button type="button">-</button>
            <input type="number"></input>
            <button type="button">+</button>
          </div>
          <div>
            <button type="button">
              Add to Shopping Bag
              <span class="material-symbols-outlined">shopping_bag</span>
            </button>
          </div>
          <div>
            <button type="button">
              Add to favorite{" "}
              <span class="material-symbols-outlined">favorite</span>
            </button>
          </div>
          <div>
            <button type="button">
                Check Out
            </button>
          </div>
          <div>
            <span class="material-symbols-outlined">local_shipping</span>
            <span>Delivered in 2-5 Days</span>
          </div>
          <div>
            <h3>Product Details</h3>
            <h4>diamond women ring</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo odio lectus, eu malesuada nisi varius at. Sed nec ipsum vitae turpis rutrum facilisis eu vel justo. Morbi venenatis at lacus et placerat. Aliquam lacus ex, commodo quis eros in, imperdiet pretium arcu. Phasellus semper, augue ut ullamcorper tincidunt, lorem purus sollicitudin ipsum, in consectetur lorem turpis eget leo. Vestibulum eu nunc condimentum, faucibus lacus quis, aliquet nisl. Donec tincidunt vel lorem id maximus. Donec ac neque erat. Aliquam interdum nulla in lorem mollis auctor.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
