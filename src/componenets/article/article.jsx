import './article.css';

import image from "../../assets/img/image.png"
import blogimg from "../../assets/img/blogimg.png"


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


            </div>
        </div>
    )
} 


export default Article;