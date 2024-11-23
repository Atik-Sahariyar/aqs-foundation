import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'
import Newsletter from '../Newsletter'
import './style.css'

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className={`wpo-ne-footer ${props.footerClass}`}>
            <Newsletter />
            <footer className="wpo-site-footer">
                <div className="wpo-upper-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-3 col-md-6 col-12">
                                <div className="widget about-widget">
                                    <div className="logo widget-title">
                                        <img src={Logo} alt="" />
                                    </div>
                                    <p>It is a non-government, non-profitable, non-political, voluntary and charitable organization. </p>
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="https://www.facebook.com/azmainqsf"><i className="ti-facebook"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-instagram"></i></Link></li>
                                        <li><Link onClick={ClickHandler} to="/"><i className="ti-google"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-lg-3 col-md-6 col-12">
                                <div className="widget link-widget">
                                    <div className="widget-title">
                                        <h3>Service</h3>
                                    </div>
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="/service-single">Islamic School</Link></li>
                                        <li><Link onClick={ClickHandler} to="/service-single">Our Causes</Link></li>
                                        <li><Link onClick={ClickHandler} to="/service">Our Service</Link></li>
                                        <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                                        <li><Link onClick={ClickHandler} to="/event">Our Event</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-lg-2 col-md-6 col-12">
                                <div className="widget link-widget">
                                    <div className="widget-title">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                        <li><Link onClick={ClickHandler} to="/service-single">Services</Link></li>
                                        <li><Link onClick={ClickHandler} to="/event">Semester</Link></li>
                                        <li><Link onClick={ClickHandler} to="/about">Prayer Times</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-lg-3 offset-lg-1 col-md-6 col-12">
                                <div className="widget market-widget wpo-service-link-widget">
                                    <div className="widget-title">
                                        <h3>Contact </h3>
                                    </div>
                                    <p>Feel free to get in touch with us for any inquiries or support. We're here to assist you!</p>
                                    <div className="contact-ft">
                                        <ul>
                                            <li><i className="fi ti-location-pin"></i>Baitul Mamur Jame Masjid,Lalkhartar, Post: Chandijan, Thana: Ulipur, Kurigram, Bangladesh</li>
                                            <li><i className="fi flaticon-call"></i>+8801715-818483</li>
                                            <li><i className="fi flaticon-envelope"></i>contact@aqsfoundation.org</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wpo-lower-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col col-xs-12">
                                <p className="copyright">&copy; 2024 AQS. All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;