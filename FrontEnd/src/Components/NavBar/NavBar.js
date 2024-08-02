import { useState } from "react";
import "./NavBar.css";
import NotificationBadge from "../NotificationBadge/NotificationBadge";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Drawer from "@mui/material/Drawer";
import Badge from "@mui/material/Badge";
import { Anchor } from "@mui/icons-material";
import ShoppingBag from "../ShoppingBag/ShoppingBag";
import FavoriteBag from "../FavoriteBag/FavoriteBag";

function NavBar(props) {
  const [show, setShow] = useState(props.show);
  const [favoriteQuantity, setFavoriteQuantity] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [openCart, setOpenCart] = useState(false);
  const [openFavorite, setOpenFavorite] = useState(false);

  const toggleCartDrawer = (newOpen) => () => {
    setOpenCart(newOpen);
  };

  const toggleFavoriteDrawer = (newOpen) => () =>{
    setOpenFavorite(newOpen);
  }

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

  return (
    <nav className="nav-bar p-1">
      <div>
        <h1>Gehna</h1>
      </div>
      <div>
        <h1>Search bar</h1>
      </div>
      {show ? showSignedIn() : showUnsignedIn()}
      <Drawer open={openCart} onClose={toggleCartDrawer(false)} anchor={'right'}>
        <ShoppingBag onClose={toggleCartDrawer}/>
      </Drawer>
      <Drawer open={openFavorite} onClose={toggleFavoriteDrawer(false)} anchor={'right'}>
        <FavoriteBag />
      </Drawer>
    </nav>
  );
}

export default NavBar;
