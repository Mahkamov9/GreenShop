
import './header.css';

import heraderImg from "../../assets/img/flower.png";

const Header = () =>{
    return(
        <div className="header">
            <div className="container">
                <div className="header-box">
                    <ul className='header-list'>
                        <li className='header-item'><h4 className='header-title'>WELCOME GREENSHOP</h4></li>
                        <li className='header-item'><h1 className='header-subtext'>LET'S MAKE A BETTER <span className='header-subtext-span'>PLANET</span></h1></li>
                        <li className='header-item'><p className='header-text'>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p></li>
                        <li className='header-item'><a className='header-link' href="#">SHOP NOW</a></li>
                    </ul>
                    <img src={heraderImg} alt="#" />
                </div>
            </div>
        </div>
    )
}


export default Header;