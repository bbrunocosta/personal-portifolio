import React, { Component } from 'react';
import Header from "../component/header/HeaderFour";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/FooterTwo";

 class error404 extends Component {
    
    render() {
        const error = {
            name:'Page not found',
            code: '404',
            message: 'The page you were looking for could not be found.',
            href:'/',
            button: 'Back To Homepage'
        } 
        return (
            <>
                <Header headerPosition="header--transparent" color="color-white" logo="logo-light" />
                {/* Start Page Error  */}
                <div className="error-page-inner bg_color--4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <h1 className="title theme-gradient">{error.code}!</h1>
                                    <h3 className="sub-title">{error.name}</h3>
                                    <span>{error.message}</span>
                                    <div className="error-button">
                                        <a className="rn-button-style--2 btn-solid" href={error.href}>{error.button}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Error  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer /> 
            </>
        )
    }
}
export default error404;
