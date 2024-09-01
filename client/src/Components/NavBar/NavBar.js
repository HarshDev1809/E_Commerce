import { useState } from "react";
import "./NavBar.css";
import NotificationBadge from "../NotificationBadge/NotificationBadge";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Drawer from "@mui/material/Drawer";
import Badge from "@mui/material/Badge";
import { Anchor } from "@mui/icons-material";
import ShoppingBag from "../../app/features/ShoppingBag/ShoppingBag";
import FavoriteBag from "../FavoriteBag/FavoriteBag";
import SearchBar from "../../app/features/SearchBar/SearchBar";
import WomenMenu from "../WomenMenu/WomenMenu";
import MenMenu from "../MenMenu/MenMenu";
import ChildrenMenu from "../ChildrenMenu/ChildrenMenu";
import CommonMenu from "../CommonMenu/CommonMenu";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  const [show, setShow] = useState(props.show);
  const [favoriteQuantity, setFavoriteQuantity] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [openCart, setOpenCart] = useState(false);
  const [openFavorite, setOpenFavorite] = useState(false);
  //
  const [womenMenu, setWomenMenu] = useState(false);
  const [mensMenu, setMensMenu] = useState(false);
  const [childsMenu, setChildsMenu] = useState(false);
  //

  const [onMenu, setOnMenu] = useState(false);

  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  const toggleOnMenu = (newState) => {
    console.log(newState);
    setOnMenu(newState);
  };

  const handleActiveMenu = (menu) => {
    setActiveMenu(menu);
  };

  const menuMouseLeave = () => {
    // setActiveMenu(null);
  };

  const toggleCartDrawer = (newOpen) => () => {
    setOpenCart(newOpen);
  };

  const toggleFavoriteDrawer = (newOpen) => () => {
    setOpenFavorite(newOpen);
  };

  const showSignedIn = () => {
    return (
      <div className="d-flex justify-content-end align-items-center p-1 gap-3">
        <button
          type="button"
          className="d-flex h-75 justify-content-center align-items-center rounded"
          onClick={toggleFavoriteDrawer(true)}
        >
          <Badge badgeContent={favoriteQuantity} color="secondary">
            <span className="material-symbols-outlined">favorite</span>
          </Badge>
        </button>
        <button
          type="button"
          className="d-flex h-75 justify-content-center align-items-center rounded"
          onClick={toggleCartDrawer(true)}
        >
          <Badge badgeContent={cartQuantity} color="secondary">
            <span className="material-symbols-outlined">shopping_bag</span>
          </Badge>
        </button>
        <div className="dropdown h-100 d-flex justify-content-center align-items-center">
          <button
            className="d-flex justify-content-center align-items-center rounded"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="material-symbols-outlined">account_circle</span>
          </button>
          <ul className="dropdown-menu">
            <li className="d-flex justify-content-center align-items-center border-bottom">
              <button type="button">Profile</button>
            </li>
            <li className="d-flex justify-content-center align-items-center border-bottom">
              <button type="button">Log Out</button>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const goToLogInPage = ()=>{
    navigate("/signin");
  }

  const goToSignUpPage = ()=>{
    navigate("/signup");
  }

  const showUnsignedIn = () => {
    return (
      <div className="unsigned-btns d-flex justify-content-end align-items-center gap-1 border border-danger">
        <button type="button" className="border h-75 login-btn" onClick = {goToLogInPage}>Log in</button>
        <button type="button" className="border h-75 login-btn" onClick = {goToSignUpPage}>Sign up</button>
      </div>
    );
  };

  const toggleWomenMenu = (state) => {
    setWomenMenu(state);
  };

  const onWomen = () => {
    console.log("on women");
  };

  const showMenu = () => {
    if (onMenu) {
      switch (activeMenu) {
        case "women":
          return <WomenMenu />;
        case "men":
          return <MenMenu />;
        case "children":
          return <ChildrenMenu />;
        case "all":
          return <CommonMenu />;
      }
    }
    // if(activeMenu === "women" && onMenu){
    //   return <WomenMenu />
    // }
  };

  const handleAllBtnClick = ()=>{
    if(onMenu && activeMenu === "all"){
      setOnMenu(false)
      return
    }
    setOnMenu(true);
    setActiveMenu("all")
  }

  const handleWomenBtnClick = ()=>{
    if(onMenu && activeMenu === "women"){
      setOnMenu(false)
      return
    }
    setOnMenu(true);
    setActiveMenu("women")
  }

  const handleMenBtnClick = ()=>{
    if(onMenu && activeMenu === "men"){
      setOnMenu(false)
      return
    }
    setOnMenu(true);
    setActiveMenu("men")
  }

  const handleChildrenBtnClick = ()=>{
    if(onMenu && activeMenu === "children"){
      setOnMenu(false)
      return
    }
    setOnMenu(true);
    setActiveMenu("children")
  }

  return (
    <nav className="nav-bar p-1 position-sticky top-0 start-0 z-3 bg-white">
      <div className="upper-section border">
        <div className="heading">
          <h1>GEHNA</h1>
        </div>
        <div className="search-div d-flex justify-content-center align-items-center border border-secondary">
          <SearchBar />
        </div>
        {show ? showSignedIn() : showUnsignedIn()}
        <Drawer
          open={openCart}
          onClose={toggleCartDrawer(false)}
          anchor={"right"}
        >
          <ShoppingBag onClose={toggleCartDrawer} />
        </Drawer>
        <Drawer
          open={openFavorite}
          onClose={toggleFavoriteDrawer(false)}
          anchor={"right"}
        >
          <FavoriteBag />
        </Drawer>
      </div>
      <div
        className="lower-section border"
        onMouseEnter={() => {
          toggleOnMenu(true);
        }}
        onMouseLeave={() => {
          toggleOnMenu(false);
        }}
      >
        <div className="text-center menu-btn">
          <button
            type="button"
            onMouseEnter={() => {
              handleActiveMenu("all");
            }}
            onClick={handleAllBtnClick}
          >
            All Jewellary
          </button>
        </div> 
        <div className="text-center border menu-btn">
          <button
            type="button"
            className="w-100"
            onMouseEnter={() => {
              handleActiveMenu("women");
            }}
            onClick={handleWomenBtnClick}
            // onMouseLeave={menuMouseLeave}
          >
            Women's
          </button>
        </div>
        <div
          className="text-center menu-btn"
          onMouseEnter={() => {
            handleActiveMenu("men");
          }}
          onClick={handleMenBtnClick}
        >
          <button type="button">Men's</button>
        </div>
        <div className="text-center menu-btn">
          <button
            type="button"
            onMouseEnter={() => {
              handleActiveMenu("children");
            }}
            onClick={handleChildrenBtnClick}
          >
            Children's
          </button>
        </div>
        {showMenu()}

        {/* <div className="lower-section-menu">
      </div> */}
      </div>
      {/* <div className="lower-section-menu">
        {showMenu()}
      </div> */}
    </nav>
  );
}

export default NavBar;
