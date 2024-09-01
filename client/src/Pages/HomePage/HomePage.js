import { useNavigate } from "react-router-dom";
import ChildrenCarousel from "../../Components/ChildrenCarousel/ChildrenCarousel";
import Footer from "../../Components/Footer/Footer";
import GeneralCarousel from "../../Components/GeneralCarousel/GeneralCarousel";
import MenCarousel from "../../Components/MenCarousel/MenCarousel";
import NavBar from "../../Components/NavBar/NavBar";
import WomenCarousel from "../../Components/WomenCarousel/WomenCarousel";
import "./HomePage.css"

function HomePage() {
  const navigate = useNavigate();

  const goToAllPage = () => {
    navigate("/all");
  };

  const goToWomenPage = () => {
    navigate("/women");
  };

  const goToMenPage = ()=>{
    navigate("/men");
  };
  
  const goToChildrenPage = ()=>{
    navigate("/children");
  };

  return (
    <div className="home-page">
      <NavBar show={false} />
      <div className="lower-section">
        <div className="general-section d-flex">
          <div className="vw-30 bg-black text-light d-flex justify-content-center flex-column align-items-center">
            <p>Get Exciting Jewellary</p>
            <button type="button" onClick={goToAllPage} className="explore-btn">
              Explore
              <span class="material-symbols-outlined">trending_flat</span>
            </button>
          </div>
          <GeneralCarousel />
        </div>
        <div className="womens-section d-flex">
          <WomenCarousel />
          <div className="vw-30 bg-white text-dark d-flex justify-content-center flex-column align-items-center">
            <h5>Women's Jewellary</h5>
            <p>Get Exciting Women's Jewellary</p>
            <button
              type="button"
              onClick={goToWomenPage}
              className="explore-btn"
            >
              Explore
              <span class="material-symbols-outlined">trending_flat</span>
            </button>
          </div>
        </div>
        <div className="mens-section d-flex border">
          <div className="vw-30 background-black text-light d-flex justify-content-center flex-column align-items-center">
            <h5>Men's Jewellary</h5>
            <p>Get Exciting Men's Jewellary</p>
            <button type="button" onClick={goToMenPage} className="explore-btn">
              Explore
              <span class="material-symbols-outlined">trending_flat</span>
            </button>
          </div>
          <MenCarousel />
        </div>
        <div className="childrens-section d-flex">
          <ChildrenCarousel />
          <div className="vw-30 bg-white text-dark text-light d-flex justify-content-center flex-column align-items-center">
            <h5>Children's Jewellary</h5>
            <p>Get Exciting Men's Jewellary</p>
            <button type="button" onClick={goToChildrenPage}>
              Explore
              <span class="material-symbols-outlined">trending_flat</span>
            </button>
          </div>
        </div>
      </div>
      <footer className="w-100 bg-black text-white">
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
