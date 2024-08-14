import "./MenCarousel.css"
import {MensCarouselImages} from "../../utils/CarouselImages";

function MenCarousel(){

    const carouselItems = (src)=>{
        console.log(src)
        return <div class="carousel-item">
        <img src={src} class="d-block w-100 carousel-images" alt="Men's Jewellary"/>
      </div>
    }

    return <div id="carouselExampleRide" className="carousel slide men-carousel bg-black" data-bs-ride="true">
    <div className="carousel-inner h-100 w-100">
        {MensCarouselImages.map((src,index)=>{
            if(index === 0){
                return <div class="carousel-item active h-100 w-100">
                <img src={src} class="d-block w-100 carousel-images" alt="Men's Jewellary"/>
              </div>
            }
            return carouselItems(src)
        })}
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
}

export default MenCarousel;