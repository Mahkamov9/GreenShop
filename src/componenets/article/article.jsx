import './article.css';

import image from "../../assets/img/image.png";
import blogimg from "../../assets/img/blogimg.png";
import cactus from "../../assets/img/cactus.png";
import bottomLogo from '../../assets/img/Logo.png';

import location from '../../assets/img/Location.png';
import mail from '../../assets/img/Message.png';
import phone from '../../assets/img/Calling.png';


const Article = () =>{
    return(
        <div className='article'>
            <div className="container">
                
                <div className="section">
                    <ul className='section-list'>
                        <li className='section-item'>
                            <img className='section-images' src={image} alt="" />
                            <ul>
                                <li className='section-item-title'>Summer cactus & succulents</li>
                                <li className='section-item-text'>We are an online plant shop offering a wide range of cheap and trendy plants</li>
                                <li className='section-item-btn'><a className='section-item-link' href="#">Find More</a></li>
                            </ul>
                        </li>
                        <li className='section-item'>
                            <img className='section-images' src={image} alt="" />
                            <ul>
                                <li className='section-item-title'>Summer cactus & succulents</li>
                                <li className='section-item-text'>We are an online plant shop offering a wide range of cheap and trendy plants</li>
                                <li className='section-item-btn'><a className='section-item-link' href="#">Find More</a></li>
                            </ul>
                        </li>
                    </ul>                
                </div>

                <div className='section section-nav'>
                    <h1 className='section-subtitle'>Our Blog Posts</h1>
                    <p className='section-title'>We are an online plant shop offering a wide range of cheap and trendy plants. </p>

                    <ul className='section-blog-list'>
                        
                        <li className='section-blog-item'>
                            <img src={blogimg} alt="" />
                            <p className='blog-title'>September 12  I Read in 6 minutes</p>
                            <p className='blog-subtitle'>Cactus & Succulent Care Tips</p>
                            <p className='blog-text'> Cacti are succulents are easy care plants for any home or patio.  </p>
                            <a className='blog-link' href="#">Read More</a>
                        </li>

                        <li className='section-blog-item'>
                            <img src={blogimg} alt="" />
                            <p className='blog-title'>September 12  I Read in 6 minutes</p>
                            <p className='blog-subtitle'>Cactus & Succulent Care Tips</p>
                            <p className='blog-text'> Cacti are succulents are easy care plants for any home or patio.  </p>
                            <a className='blog-link' href="#">Read More</a>
                        </li>

                        <li className='section-blog-item'>
                            <img src={blogimg} alt="" />
                            <p className='blog-title'>September 12  I Read in 6 minutes</p>
                            <p className='blog-subtitle'>Cactus & Succulent Care Tips</p>
                            <p className='blog-text'> Cacti are succulents are easy care plants for any home or patio.  </p>
                            <a className='blog-link' href="#">Read More</a>
                        </li>

                        <li className='section-blog-item'>
                            <img src={blogimg} alt="" />
                            <p className='blog-title'>September 12  I Read in 6 minutes</p>
                            <p className='blog-subtitle'>Cactus & Succulent Care Tips</p>
                            <p className='blog-text'> Cacti are succulents are easy care plants for any home or patio.  </p>
                            <a className='blog-link' href="#">Read More</a>
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <div className="section-box">
                        <div className='section-box-card'>
                            <img className='section-box-img' src={cactus} alt="" />
                            <p className='section-box-subtitle' >Garden Care</p>
                            <p className='section-box-title'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                        </div>
                        <div className='section-box-card'>
                            <img className='section-box-img' src={cactus} alt="" />
                            <p className='section-box-subtitle' >Garden Care</p>
                            <p className='section-box-title'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                        </div>
                        <div className='section-box-card'>
                            <img className='section-box-img' src={cactus} alt="" />
                            <p className='section-box-subtitle' >Garden Care</p>
                            <p className='section-box-title'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                        </div>                        
                        <div className='section-box-input'>
                            <p className='section-box-input-subtite'>Would you like to join newsletters?</p>
                            <div>
                                <input className='section-input'  type="text" placeholder='enter your email address...' />
                                <button className='section-btn' >Join</button>
                            </div>
                            <p className='section-box-input-tite'>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
                        </div>

                    </div>
                </div>
                <div className="section">
                    <div className="section-bottom-box">
                        <ul className='section-bottom-box-list'>
                            <li className='section-bottom-box-item'><img src={bottomLogo} alt="" /></li>
                            <li className='section-bottom-box-item'><img src={location} alt="" /> <p className='section-bottom-box-item-link'>70 West Buckingham <br /> Ave.Farmingdale, NY 11735</p></li>
                            <li className='section-bottom-box-item'><img src={mail} alt="" /> <a className='section-bottom-box-item-link' href="#">contact@greenshop.com</a></li>
                            <li className='section-bottom-box-item'><img src={phone} alt="" /> <a className='section-bottom-box-item-link' href="#">+88 01911 717 490</a></li>
                            
                        </ul>

                    </div>
                </div>


            </div>
        </div>
    )
} 


export default Article;