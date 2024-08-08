import NavBar from "../../Components/NavBar/NavBar";
import { Link, useLocation } from "react-router-dom";
import "./WomenPage.css";
import { useEffect, useState } from "react";
import SideBar from "../../app/features/SideBar/SideBar";

function WomenPage() {
  // const location = useLocation();
  // function useQuery() {
  //   return new URLSearchParams(location.search);
  // }
  // const query = useQuery();
  // const [material, setMaterials] = useState([]);
  // const [category, setCategory] = useState([]);
  // const [occasion, setOccasion] = useState([]);

  const location = useLocation();

  function useQuery() {
    return new URLSearchParams(location.search);
  }

  const query = useQuery();

  const [material, setMaterials] = useState(query.getAll("material"));
  const [category, setCategory] = useState(query.getAll("category"));
  const [occasion, setOccasion] = useState(query.getAll("occasion"));

  const addCategory = () => {
    console.log(category)
      return (
        <>
          <li>
            <span>{">"}</span>
          </li>
          <li>
            <Link to="/" className="link">
              {category[0]}
            </Link>
          </li>
        </>
      );
  };

  const addMaterial = () => {
    console.log(material)
      return (
        <>
          <li>
            <span>{">"}</span>
          </li>
          <li>
            <Link to="/" className="link">
              {material[0]}
            </Link>
          </li>
        </>
      );
  };

  const addOccasion = () => {
    console.log(occasion)
      return (
        <>
          <li>
            <span>{">"}</span>
          </li>
          <li>
            <Link to="/" className="link">
              {occasion[0]}
            </Link>
          </li>
        </>
      );
  };

  // useEffect(() => {
  //   const query = useQuery();
  //   setMaterials(query.getAll("material"));
  //   setCategory(query.getAll("category"));
  //   setOccasion(query.getAll("occasion"));
  // }, [location]);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    setMaterials(query.getAll("material"));
    setCategory(query.getAll("category"));
    setOccasion(query.getAll("occasion"));
  }, [location]);


  // useEffect(()=>{
  // },[query])

  return (
    <div className="women-page">
      <NavBar show={true} />
      <nav className="border p-1">
        <ol className="d-flex">
          <li>
            <Link to="/" className="d-flex link">
              <span className="material-symbols-outlined">home</span>Home
            </Link>
          </li>
          <li>
            <span>{">"}</span>
          </li>
          <li>
            <Link to="/women" className="link">
              Woman
            </Link>
          </li>
          {category.length > 0&& addCategory()}
          {material.length >0  && addMaterial()}
          {occasion.length > 0 && addOccasion()}
        </ol>
      </nav>
      <div className="lower-page-section">
        <div className="side-bar-section border">
          <SideBar />
        </div>
        <div className="main-section">
          <div className="button-section">
            <button type="button">Filter</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WomenPage;
