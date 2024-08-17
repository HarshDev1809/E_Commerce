import { Link } from "react-router-dom";
import "./MenMenu.css"

function MenMenu(){
    return <div className="men-menu d-flex justify-content-evenly">
        <div className="div-1">
        <ul>
          <li>
            <Link to="/men" className="link">
              All Jewellary
            </Link>
          </li>
          <li>
            <Link to="/men?category=ring" className="link">
              Rings
            </Link>
          </li>
          <li>
            <Link to="/men?category=bangle" className="link">
              Bangles
            </Link>
          </li>
          <li>
            <Link to="/men?category=chain" className="link">
              Chains
            </Link>
          </li>
          <li>
            <Link to="/men?category=lapel" className="link">
              Lapel Pins
            </Link>
          </li>
          <li>
            <Link to="/men?category=brooch" className="link">
              brooch
            </Link>
          </li>
        </ul>
        </div>
        <div className="div-2">
            <h1>By Material</h1>
            <ul>
                <li><Link to="/men?material=gold" className="link">Gold</Link></li>
                <li><Link to="/men?material=silver" className="link">Silver</Link></li>
                <li><Link to="/men?material=metal" className="link">Metal</Link></li>
            </ul>
        </div>
        <div className="div-2">
            <h1>By occasion</h1>
            <ul>
                <li><Link to="/men?occasion=wedding" className="link">Wedding</Link></li>
                <li><Link to="/men?occasion=formal" className="link">Formal</Link></li>
                <li><Link to="/men?occasion=casual" className="link">Casual</Link></li>
                <li><Link to="/men?occasion=daily-wear" className="link">Daily Wear</Link></li>
            </ul>
        </div>
    </div>
}

export default MenMenu;