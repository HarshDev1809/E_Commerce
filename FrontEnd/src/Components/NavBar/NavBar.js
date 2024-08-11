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

  const showUnsignedIn = () => {
    return (
      <div>
        <h1>.</h1>
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
          return;
      }
    }
    // if(activeMenu === "women" && onMenu){
    //   return <WomenMenu />
    // }
  };

  return (
    <nav className="nav-bar p-1 position-sticky top-0 start-0 z-3">
      <div className="upper-section border">
        <div>
          <h1>Gehna</h1>
        </div>
        <div className="search-div d-flex justify-content-center align-items-center">
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
        <div className="fs-3 text-center">
          <button
            type="button"
            onMouseEnter={() => {
              handleActiveMenu("all");
            }}
          >
            All Jewellary
          </button>
        </div>
        <div className="fs-3 text-center border">
          <button
            type="button"
            className="w-100"
            onMouseEnter={() => {
              handleActiveMenu("women");
            }}
            // onMouseLeave={menuMouseLeave}
          >
            Women's
          </button>
        </div>
        <div
          className="fs-3 text-center"
          onMouseEnter={() => {
            handleActiveMenu("men");
          }}
        >
          <button type="button">Men's</button>
        </div>
        <div className="fs-3 text-center">
          <button
            type="button"
            onMouseEnter={() => {
              handleActiveMenu("children");
            }}
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
