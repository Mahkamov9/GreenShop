import './aside.css';

// Pagination

import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


import Cardimg from "../../assets/img/card-img.png";

const Aside = () =>{
    return(
        <div className="aside">
            <div className="container">
                <div className="aside-box">
                    
                    <div className='aside-sidebar'>
                        <h4>Categories</h4>
                        <ul>
                            <li>House Plants</li>
                            <li>House Plants</li>
                            <li>House Plants</li>
                            <li>House Plants</li>
                            <li>House Plants</li>
                            <li>House Plants</li>
                            <li>House Plants</li>
                            <li>House Plants</li>
                            <li>House Plants</li>

                        </ul>
                    </div>
                    <div className='aside-product'>
                        <div className='aside-product-nav'>
                            <div>
                                <a className='aside-product-link' href="#">All Plants</a>
                                <a className='aside-product-link' href="#">New Arrivals</a>
                                <a className='aside-product-link' href="#">Sale</a>
                            </div>
                            <div>
                                <p>Short by:  <select className='aside-select'><option>Default sorting</option><option>A-Z sorting</option></select> </p>
                            </div>
                        </div>
                        <ul className='aside-card-box'>
                            <li>
                                <div>
                                    <div className='aside-card'>
                                        <img src={Cardimg} alt="" />
                                    </div>
                                    <p className='card-text'>Beach Spider Lidy</p>
                                    <p className='card-price'>$129.00</p>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <div className='aside-card'>
                                        <img src={Cardimg} alt="" />
                                    </div>
                                    <p className='card-text'>Beach Spider Lidy</p>
                                    <p className='card-price'>$129.00</p>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <div className='aside-card'>
                                        <img src={Cardimg} alt="" />
                                    </div>
                                    <p className='card-text'>Beach Spider Lidy</p>
                                    <p className='card-price'>$129.00</p>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <div className='aside-card'>
                                        <img src={Cardimg} alt="" />
                                    </div>
                                    <p className='card-text'>Beach Spider Lidy</p>
                                    <p className='card-price'>$129.00</p>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <div className='aside-card'>
                                        <img src={Cardimg} alt="" />
                                    </div>
                                    <p className='card-text'>Beach Spider Lidy</p>
                                    <p className='card-price'>$129.00</p>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <div className='aside-card'>
                                        <img src={Cardimg} alt="" />
                                    </div>
                                    <p className='card-text'>Beach Spider Lidy</p>
                                    <p className='card-price'>$129.00</p>
                                </div>
                            </li>
                        </ul>

                        <div className='aside-pagination' >
                        <Stack 
                            spacing={4}>
                            <Pagination count={4} variant="outlined" shape="rounded" />
                        </Stack>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Aside;