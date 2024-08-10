import NavBar from "../../Components/NavBar/NavBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./WomenPage.css";
import { useEffect, useState } from "react";
import SideBar from "../../app/features/SideBar/SideBar";
import SortMenu from "../../app/features/SortMenu/SortMenu";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../app/features/Items/ItemsSlice";
import { CircularProgress } from "@mui/material";
import Item from "../../Components/Item/Item";

function WomenPage() {
  // const location = useLocation();
  // function useQuery() {
  //   return new URLSearchParams(location.search);
  // }
  // const query = useQuery();
  // const [material, setMaterials] = useState([]);
  // const [category, setCategory] = useState([]);
  // const [occasion, setOccasion] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state)=> state.items.items)
  const status = useSelector((state)=>state.items.status);
  const error = useSelector((state)=>state.items.error)

  const [showSideBar, setShowSideBar] = useState(true);

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

  const toggleSideBar = ()=>{
    setShowSideBar(!showSideBar);
  }

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

    if(status === 'idle'){
      dispatch(getItems());
    }
  }, [location,status]);

  const displayData = (status)=>{
    switch(status){
      case "loading":
        return <CircularProgress color="secondary" />;
      case "succeeded":
        return showItems();
        case "failed":
          return <h1>Failed</h1>
    } 
  }

  const showItems = () =>{
    return <div className="item-div px-3 border">
      {items.map((item)=>{
        return <Item item={item}/>
      })}
    </div>
  }

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
      <div className="lower-page-section d-flex">
      {showSideBar && 
          <SideBar />
        //   <div className="side-bar-section border">
        // </div>}
      }
        
        <div className="main-section border">
          <div className="button-section border d-flex justify-content-between px-4 py-3">
            <button type="button" onClick={toggleSideBar}>Filter</button>
            <SortMenu />
          </div>
          {displayData(status)}
        </div>
      </div>
    </div>
  );
}

export default WomenPage;
