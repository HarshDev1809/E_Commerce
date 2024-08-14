import Paper from "@mui/material/Paper";
import "./CartItem.css";

function CartItem({ item }) {

    // const removeItem = ()=>{
    //     window.alert("remove ?");
    // }

  return (
    <div className="cart-item d-flex gap-1">
      <div className="image-div h-100">
        <img src={item.photo} className="img-thumbnail" alt="Description" />
      </div>
      <div className="secondary-div h-100 d-flex flex-column justify-content-between py-2">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold fs-6">{item.itemName}</span>
          <button type="button" className="delete-btn d-flex justify-content-center align-items-center">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="d-flex justify-content-around">
          <div className="input-group mb-3 h-100 w-50 d-flex">
            <button
              className="btn btn-outline-secondary h-100 w-25 d-flex justify-content-center align-items-center"
              type="button"
              id="button-addon1"
            ><span class="material-symbols-outlined">remove</span>
            </button>
            <input
              type="text"
              className="form-control h-100 w-25 text-center"
              placeholder=""
              value={item.quantity}
            />
            <button
              className="btn btn-outline-secondary h-100 w-25 d-flex justify-content-center align-items-center"
              type="button"
              id="button-addon1"
            >
              <span class="material-symbols-outlined">add</span>
            </button>
          </div>
          <span className="border">{`Rs. ${item.quantity * item.sellingPrice}`}</span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
