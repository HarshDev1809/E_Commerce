import { useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import { Rating } from "@mui/material";
import { useState,useEffect} from "react";
import "./ItemPage.css";

function ItemPage() {
  const { id } = useParams();
  const [rating, setRating] = useState(3.5);
  const [quantity, setQuantity] = useState(3)
  const [disableDecreaseBtn, setDisableDecreaseBtn] = useState(false);
  const [disableIncreaseBtn, setDisableIncreaseBtn] = useState(false)
  const [displayImage, setDisplayImage] = useState(
    "https://www.candere.com/media/jewellery/images/GR00103__1.jpeg"
  );
  const dummyPhotos = [
    "https://www.candere.com/media/jewellery/images/GR00103__1.jpeg",
    "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://www.sneharateria.com/cdn/shop/articles/main-qimg-833cdaf88b39ed05ef8fbc57df564fcd-lq_1200x1200.jpg?v=1682060652",
    "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2021/01/07/137307-gold.jpg?itok=mY216uZi",
    "https://cdn.shopify.com/s/files/1/0507/9865/7726/files/GoldNecklace_660x550_6df12311-a226-49ed-a709-2bd12a8006f5_2048x2048.webp?v=1682061538",
  ];

  const openNextImage = ()=>{
    const imageIndex = dummyPhotos.indexOf(displayImage) + 1
    console.log(imageIndex)
    if(imageIndex >= dummyPhotos.length){
        setDisplayImage(dummyPhotos[0]);
        return;
    }
    setDisplayImage(dummyPhotos[imageIndex])
  }

  const openPreviousImage = ()=>{
    const imageIndex = dummyPhotos.indexOf(displayImage) - 1;
    if(imageIndex < 0){
        setDisplayImage(dummyPhotos[dummyPhotos.length -1]);
        return
    }
    setDisplayImage(dummyPhotos[imageIndex])
  }

  const openImage = (e) => {
    setDisplayImage(e.target.src);
  };

  const increaseQuantity = ()=>{
    let itemQuantity = quantity;
    setQuantity(++itemQuantity)
  }

  const decreaseQuantity = ()=>{
    let itemQuantity = quantity;
    if(itemQuantity <= 1){
      setDisableDecreaseBtn(true);
      return
    }
    itemQuantity--;
    setQuantity(itemQuantity)
  }

  useEffect(()=>{
    if(quantity <=1){
      setDisableDecreaseBtn(true);
    }else{
      setDisableDecreaseBtn(false)
    }
  },[quantity])

  return (
    <div className="item-page">
      <NavBar />
      <div className="page-section">
        <div className="image-section h-100 w-50">
          {/* <div className="display-image-div border h-75 w-100 d-flex">
            <button type="button" onClick={openPreviousImage}>
              <span class="material-symbols-rounded">arrow_back_ios</span>
            </button>
            <img src={displayImage} className="h-100 w-100" />
            <button type="button" onClick={openNextImage}>
              <span class="material-symbols-rounded">arrow_forward_ios</span>
            </button>
          </div> */}
          <div className="display-image-div border h-75 w-100 p-3">
            <img src={displayImage} className="h-100 w-100 big-image border border-primary" />
            <button type="button" onClick={openPreviousImage} className="h-25 prev-btn opacity-50">
              <span class="material-symbols-rounded">arrow_back_ios</span>
            </button>
            <button type="button" onClick={openNextImage} className="h-25 next-btn opacity-50">
              <span class="material-symbols-rounded">arrow_forward_ios</span>
            </button>
          </div>
          <div className="item-small-images border w-100 d-flex gap-2 px-2">
            {dummyPhotos.map((photo) => {
              // return <div className="h-100 border border-danger"><img src={photo} onClick={openImage} className="small-images border border-primary"/></div>
              return (
                <img
                  src={photo}
                  onClick={openImage}
                  className="small-images border border-primary"
                />
              );
            })}
          </div>
        </div>
        <div className="info-section border h-100 w-50 p-3 gap-3 d-flex flex-column">
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
          <div className="d-flex gap-2">
            <span>
              <del>₹1000</del>
            </span>
            <span>₹980</span>
            <span>Tax included. Shipping calculated at checkout.</span>
          </div>
          <div className="border d-flex w-25">
            <button type="button" className="w-25" disabled={disableDecreaseBtn} onClick={decreaseQuantity}>-</button>
            <input type="number" className="w-50 text-center" value={quantity}></input>
            <button type="button" className="w-25" disabled={disableIncreaseBtn} onClick={increaseQuantity}>+</button>
          </div>
          <div className="border border-primary d-flex flex-column gap-2 py-3">
            <button type="button">
              Add to Shopping Bag
              <span class="material-symbols-outlined">shopping_bag</span>
            </button>
            <button type="button">
              Add to favorite
              <span class="material-symbols-outlined">favorite</span>
            </button>
            <button type="button">Check Out</button>
          </div>
          <div className="border d-flex gap-1">
            <span class="material-symbols-outlined">local_shipping</span>
            <span>Delivered in 2-5 Days</span>
          </div>
          <div>
            <h3>Product Details</h3>
            <h4>diamond women ring</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              commodo odio lectus, eu malesuada nisi varius at. Sed nec ipsum
              vitae turpis rutrum facilisis eu vel justo. Morbi venenatis at
              lacus et placerat. Aliquam lacus ex, commodo quis eros in,
              imperdiet pretium arcu. Phasellus semper, augue ut ullamcorper
              tincidunt, lorem purus sollicitudin ipsum, in consectetur lorem
              turpis eget leo. Vestibulum eu nunc condimentum, faucibus lacus
              quis, aliquet nisl. Donec tincidunt vel lorem id maximus. Donec ac
              neque erat. Aliquam interdum nulla in lorem mollis auctor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
