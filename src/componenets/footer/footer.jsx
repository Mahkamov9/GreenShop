import "./footer.css";

import visa from '../../assets/img/visa.png';


const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-box container">
                <ul className="footer-list">
                    <li className="footer-item">
                        <ul className="footer-link-box">
                            <li className="footer-link-box-item" ><a className="footer-link bold-link" href="#">My Accaunt</a></li>
                            <li className="footer-link-box-item" ><a className="footer-link" href="#">My Accaunt</a></li>
                            <li className="footer-link-box-item" ><a className="footer-link" href="#">Our Stories</a></li>
                            <li className="footer-link-box-item" ><a className="footer-link" href="#">Contact Us</a></li>
                            <li className="footer-link-box-item" ><a className="footer-link" href="#">Career</a></li>
                            <li className="footer-link-box-item" ><a className="footer-link" href="#">Specials</a></li>
                        </ul>
                    </li>

                    <li className="footer-item">
                        <ul className="footer-link-box">
                            <li className="footer-link-box-item" ><a className="footer-link bold-link" href="#">Help & Guide</a></li>
                            <li className="footer-link-box-item" ><a className="footer-link" href="#">Help Center</a></li>
                            <li className="footer-link-box-item" ><a className="footer-link" href="#">How to Buy</a></li>
                            <li className="footer-link-box-item" ><a className="footer-link" href="#">Shipping & Delivery</a></li>
                            <li className="footer-link-box-item" ><a className="footer-link" href="#">Product Policy</a></li>
                            <li className="footer-link-box-item" ><a className="footer-link" href="#">How to Return</a></li>
                        </ul>
                    </li>

                    <li className="footer-item">
                        <ul className="footer-link-box">
                            <li className="footer-link-box-item" ><a className="footer-link bold-link" href="#">Categories</a></li>
                            <li className="footer-link-box-item" ><a className="footer-link" href="#">House Plants</a></li>
                            <li className="footer-link-box-item" ><a className="footer-link" href="#">Potter Plants</a></li>
                            <li className="footer-link-box-item" ><a className="footer-link" href="#">Seeds</a></li>
                            <li className="footer-link-box-item" ><a className="footer-link" href="#">Small Plants</a></li>
                            <li className="footer-link-box-item" ><a className="footer-link" href="#">Accessories</a></li>
                        </ul>
                    </li>

                    <li className="footer-item">
                        <ul className="footer-link-box">
                            <li className="footer-link-box-item" ><a className="footer-link" href="#">My Accaunt</a></li>
                            <img src="" alt="" />
                            <li className="footer-link-box-item" ><a className="footer-link" href="#">My Accaunt</a></li>
                            <img src={visa} alt="" />
                        </ul>
                    </li>
                </ul>
                <hr />
                <p className="footer-bottom-text">© 2021 GreenShop. All Rights Reserved.</p>
            </div>
        </div>
    )
}


export default Footer;