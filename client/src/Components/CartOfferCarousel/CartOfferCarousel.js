import { useState } from "react";

function CartOfferCarousel(){

    let tempItems = ['use <b>MY%)OFF</b> for <b>50%  off</b>.','Free shipping on Purachase worth of <b>rs 500</b>.',"Get Gift free worth off <b>rs 300</b> on purchase of item worth rs 2500."];

    const [carouselItems, setCarouselItems] = useState([tempItems]);

    const carouselItem = ()=>{
        return <div className="carousel-inner">
            {carouselItems.map((item,index)=>{
                console.log(item);
                if(index === 1){
                    <div className="carousel-item active">
                        <span>{item}</span>
                    </div>
                }else{
                    <div className="carousel-item">
                    <span>{item}</span>
                </div>
                }
            })}
        </div>
    }

    return <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div class="carousel-item active">
        <span>{tempItems[0]}</span>
      </div>
      <div class="carousel-item">
      <span>{tempItems[1]}</span>
      </div>
      <div class="carousel-item">
      <span>{tempItems[2]}</span>
      </div>
    </div>
    {/* {carouselItem()} */}
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
}

export default CartOfferCarousel;