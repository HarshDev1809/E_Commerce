import "./WomenMenu.css"
import { Link } from "react-router-dom";

function WomenMenu(){
    return <div className="border women-menu d-flex justify-content-center">
        <div className="border w-25 p-1">
            <ul>
                <li><Link to="/women" className="link">All Jewellary</Link></li>
                <li><Link to="/women?category=ring" className="link">Rings</Link></li>
                <li><Link to="/women?category=bangle" className="link">Bangles</Link></li>
                <li><Link to="/women?category=necklace" className="link">Necklaces</Link></li>
                <li><Link to="/women?category=earring" className="link">Earrings</Link></li>
                <li><Link to="/women?category=eartop" className="link">Eartops</Link></li>
                <li><Link to="/women?category=pendant" className="link">Pendant</Link></li>
            </ul>
        </div>
        <div className="border w-25">
            <h1>By Material</h1>
            <ul>
                <li><Link to="/women?material=gold" className="link">Gold</Link></li>
                <li><Link to="/women?material=silver" className="link">Silver</Link></li>
                <li><Link to="/women?material=metal" className="link">Metal</Link></li>
            </ul>
        </div>
        <div className="border w-25">
            <h1>By occasion</h1>
            <ul>
                <li><Link to="/women?occasion=wedding" className="link">Wedding</Link></li>
                <li><Link to="/women?occasion=formal" className="link">Formal</Link></li>
                <li><Link to="/women?occasion=casual" className="link">Casual</Link></li>
                <li><Link to="/women?occasion=daily-wear" className="link">Daily Wear</Link></li>
            </ul>
        </div>
    </div>
}

export default WomenMenu;