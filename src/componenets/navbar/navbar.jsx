import "./navbar.css";

// images
import Logo from "../../assets/img/Logo.png";
import Search from "../../assets/img/search.png";
import Storage from "../../assets/img/storage.png";
import Logout from "../../assets/img/logout.png";



const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="container">
                <div className="nav-box">
                    <a className="nav-logo" href="/"><img src={Logo} alt="Green"/></a>
                    
                    <ul className="nav-list">
                        <li className="nav-item"><a className="nav-item-link" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-item-link" href="#">Shop</a></li>
                        <li className="nav-item"><a className="nav-item-link" href="#">Plant Care</a></li>
                        <li className="nav-item"><a className="nav-item-link" href="#">Blogs</a></li>
                    </ul>

                    <div className="nav-btn-box">
                        <button className="nav-search"><img src={Search} alt=""/></button>
                        <button className="nav-search"><img src={Storage} alt="" /></button>
                        <button className="nav-login"><img src={Logout} alt="" /><p>Log in</p></button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Navbar;