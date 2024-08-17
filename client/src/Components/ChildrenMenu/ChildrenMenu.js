import { Link } from "react-router-dom";
import "./ChildrenMenu.css"

function ChildrenMenu(){
    return <div className="children-menu d-flex justify-content-end">
        <div className="div-1">
        <ul className="pe-2">
          <li className="d-flex justify-content-end">
            <Link to="/children" className="link">
              All Jewellary
            </Link>
          </li>
          <li className="d-flex justify-content-end">
            <Link to="/children?category=ring" className="link">
              Rings
            </Link>
          </li>
          <li className="d-flex justify-content-end">
            <Link to="/children?category=bangle" className="link">
              Bangles
            </Link>
          </li>
          <li className="d-flex justify-content-end">
            <Link to="/children?category=chain" className="link">
              Chains
            </Link>
          </li>
          <li className="d-flex justify-content-end">
            <Link to="/children>category=bracelet" className="link">
              Bracelet
            </Link>
          </li>
        </ul>
        </div>
    </div>
}

export default ChildrenMenu;