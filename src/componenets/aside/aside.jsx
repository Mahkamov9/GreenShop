import './aside.css';

import Supersale from "../../assets/img/supersale.png"

// Pagination

import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


import Cardimg from "../../assets/img/card-img.png";
import RangeSlider from '../slider/slider';

const Aside = () =>{
    return(
        <div className="aside">
            <div className="container">
                <div className="aside-box">
                    
                    <div className='aside-sidebar'>
                        <h4 className='aside-sidebar-subtitlte' >Categories</h4>
                        <ul>
                            <li className='aside-sidebar-item' ><p>House Plants</p>  <p>(33)</p> </li>
                            <li className='aside-sidebar-item' ><p>Potter Plants</p>  <p>(12)</p> </li>
                            <li className='aside-sidebar-item' ><p>Seeds</p>  <p>(65)</p> </li>
                            <li className='aside-sidebar-item' ><p>Small Plants</p>  <p>(39)</p> </li>
                            <li className='aside-sidebar-item' ><p>Big Plants</p>  <p>(23)</p> </li>
                            <li className='aside-sidebar-item' ><p>Succelents</p>  <p>(17)</p> </li>
                            <li className='aside-sidebar-item' ><p>Trerraiums</p>  <p>(19)</p> </li>
                            <li className='aside-sidebar-item' ><p>Gardening</p>  <p>(13)</p> </li>
                            <li className='aside-sidebar-item' ><p>Accessories</p>  <p>(18)</p> </li>
                        </ul>

                        <h4 className='aside-sidebar-subtitlte' >Price Range</h4>
                        
                        <div className='sidebar-slider' >
                            <RangeSlider/>
                            <p className='card-price'> <span>Price:</span> $39 - $1230</p>
                        </div>

                        <button className='sidebar-filter'>Filter</button>

                        <h4 className='aside-sidebar-subtitlte' >Size</h4>

                        <ul >
                            <li className='aside-sidebar-item' ><p>Small</p>  <p>(119)</p> </li>
                            <li className='aside-sidebar-item' ><p>Medium</p>  <p>(86)</p> </li>
                            <li className='aside-sidebar-item' ><p>Large</p>  <p>(78)</p> </li>
                        </ul>

                        <img className='sidebar-img' src={Supersale} alt="" />


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
                            <Pagination count={4}  shape="rounded" color="success" hidePrevButton  />
                        </Stack>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}


export default Aside;