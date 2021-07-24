import React, { useEffect, createRef } from "react";
import Link from 'next/link'
import { FiX , FiMenu} from "react-icons/fi";
import Scrollspy from 'react-scrollspy'
import SocialShare from '../commons/SocialShare'
import socialShareData from '../../data/socialShare'

const  HeaderThree = ({colorType, menus}) => {
    const headerRef = createRef()
    const homeLink="/" 
    const logo="symbol-dark" 
    const color="color-black"
    
    function menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    
    function CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }

    useEffect(()=>{
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 100) {
                headerRef.current?.classList.add('sticky')
            }else{
                headerRef.current?.classList.remove('sticky')
            }
        })
    },[])

    function handleClick (e)  {
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
        
        return(
            <header ref={headerRef} className={`header-area header-style-two header--${colorType} ${color}`}>
                <div className="header-wrapper">
                    <div className="header-left d-flex align-items-center">
                        <div className="logo">
                            <Link href={homeLink}>
                                <a >
                                    {/* {logoUrl} */}
                                </a>
                            </Link>
                        </div>
                        <nav className="mainmenunav d-lg-block ml--50">
                            <Scrollspy className="mainmenu" items={['home','about','service','portfolio','blog','contact']} currentClassName="is-current" offset={-200}>
                            {
                                menus.map( menu => {
                                    if(!menu.submenu){
                                        return (
                                            <li key={menu.name}>
                                                <Link href={menu.href}>
                                                   <a target={menu.targt || null}>
                                                       {menu.name}
                                                    </a>
                                                </Link>
                                            </li>
                                        )
                                    }else {
                                        return (
                                            <li key={menu.name} className="has-droupdown"  onClick={handleClick}>
                                                <Link href={menu.href}>
                                                    <a target={menu.targt || null}>
                                                        {menu.name}
                                                    </a>
                                                </Link>
                                                <ul className="submenu">
                                                    {
                                                        menu.submenu.map(submenu => 
                                                            <li key={submenu.name}>
                                                                <Link href={submenu.href}>
                                                                    <a target={menu.targt || null}>
                                                                    {submenu.name}
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                        )
                                                    }
                                                </ul>
                                            </li>
                                        )
                                    }
                                })
                            }
                            </Scrollspy>
                        </nav>
                    </div>
                    <div className="header-right">
                        <SocialShare data={socialShareData}/>
                        <div className="header-btn">
                            {/* <a className="rn-btn" href="https://themeforest.net/checkout/from_item/25457315?license=regular">
                                <span>buy now</span>
                            </a> */}
                        </div>
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
            </header>
        )
    }
export default HeaderThree;