import { Link } from "react-router-dom";
import "./CommonMenu.css"

function CommonMenu(){
    return <div className="common-menu">
        <div className="div-1 border">
        <ul className="px-2">
          <li>
            <Link to="/all" className="link">
              All Jewellary
            </Link>
          </li>
          <li>
            <Link to="/all?category=ring" className="link">
              Rings
            </Link>
          </li>
          <li>
            <Link to="/all?category=bangle" className="link">
              Bangles
            </Link>
          </li>
          <li>
            <Link to="/all?category=necklace" className="link">
              Necklaces
            </Link>
          </li>
          <li>
            <Link to="/all?category=earring" className="link">
              Earrings
            </Link>
          </li>
          <li>
            <Link to="/all?category=eartop" className="link">
              Eartops
            </Link>
          </li>
          <li>
            <Link to="/all?category=pendant" className="link">
              Pendant
            </Link>
          </li>
        </ul>
        </div>
    </div>
}

export default CommonMenu;