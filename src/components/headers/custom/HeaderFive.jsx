import React, { Component, useEffect } from "react";
import Link  from 'next/link';
import { FiX , FiMenu } from "react-icons/fi";

const  HeaderFive = (props) => { 
    const  headerPosition = "header--static logoresize"
    const  color = "color-black"
    const handleClick = (e) => {
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
    }
    function menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    function CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }
        
        return(
            <header className={`header-area formobile-menu ${headerPosition} ${color}`}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-4 col-6">
                                <div className="header-left">
                                    <div className="logo">
                                        <a href="/">
                                            {props.logoUrl}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8 col-6">
                                <div className="header-right justify-content-end">
                                    <nav className="mainmenunav d-lg-block">
                                        <ul className="mainmenu">
                                            <li className="has-droupdown" onClick={handleClick}><Link href="#">Home</Link></li>
                                            <li  onClick={handleClick}><Link href="/service" >About</Link></li>
                                            <li className="has-droupdown"  onClick={handleClick}><Link href="#pages" >Projects</Link>
                                                <ul className="submenu">
                                                    <li><Link href="/blog">Blog List</Link></li>
                                                    <li><Link href="/blog-details">Blog Details</Link></li>
                                                    <li><Link href="/service">Service</Link></li>
                                                    <li><Link href="/service-details">Service Details</Link></li>
                                                    <li><Link href="/portfolio">Portfolio</Link></li>
                                                    <li><Link href="/portfolio-details">Portfolio Details</Link></li>
                                                    <li><Link href="/404">404</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/contact" >Contact</Link></li>
                                        </ul>
                                    </nav>
                                    {/* <div className="header-btn">
                                        <a className="rn-btn" href="https://themeforest.net/checkout/from_item/25457315?license=regular">
                                            <span>buy now</span>
                                        </a>
                                    </div> */}
                                    {/* Start Humberger Menu  */}
                                    <div className="humberger-menu d-block d-lg-none pl--20">
                                        <span onClick={menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                                    </div>
                                    {/* End Humberger Menu  */}
                                    <div className="close-menu d-block d-lg-none">
                                        <span onClick={CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
export default HeaderFive;