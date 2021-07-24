import React from 'react';
import {FaWhatsapp ,FaMailBulk ,FaGithub , FaLinkedinIn } from "react-icons/fa";
const socialShare = [
    {
        Social: <FaGithub />,
        link: 'https://github.com/bbrunocosta',
        target:'_blank'
    },
    {
        Social: <FaLinkedinIn />,
        link: 'https://www.linkedin.com/in/bbrunocosta',
        target:'_blank'
    },
    {
        Social: <FaWhatsapp />,
        link: 'https://wa.me/5511959963068',
        target:'_blank'
    },
    {
        Social: <FaMailBulk />,
        link: 'mailto:business.brunocosta@gmail.com',
    },
]

const FooterTwo = () => {
    return (
        <div className="footer-style-2 ptb--20 bg_image bg_image--1" data-black-overlay="6">
            <div className="wrapper plr--50 plr_sm--20">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner">
                            <div className="logo text-center text-sm-left mb_sm--20">
                                <a href="/">
                                    {/* <img src="/assets/images/logo/logo.png" alt="Logo images"/> */}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner text-center">
                            <ul className="social-share-1 rn-lg-size d-flex justify-content-center liststyle">
                                {socialShare.map((val , i) => (
                                    <li key={i}><a target="_blank" href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
                            <div className="text">
                                <p>Copyright © 2021 Bruno-Costa. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterTwo;