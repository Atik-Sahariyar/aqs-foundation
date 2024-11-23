import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'


const Hero = (props) => {

    return (
        <section className={`hero ${props.HeroStyleClass}`}>
            <div className="hero-slider">
                <div className="slide">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-7 slide-caption">
                                <div className="slide-top">
                                    <span>Let’s Know Islam</span>
                                </div>
                                <div className="slide-title">
                                    <h2>Empowering the Future with Knowledge and Faith</h2>
                                </div>
                                <div className="slide-subtitle">
                                    <p>Azmain QS Foundation is a non-profit organization focused on Islamic education, orphan care, and community welfare. Our mission includes Quranic schools, libraries, and support for the elderly.</p>
                                </div>
                                <div className="btns">
                                    <Link to="/about" className="theme-btn">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-vec">
                        <img src={"https://ummah-reactjs.wpocean.com/static/media/img-3.44bb17a6.png"} alt="" />
                        <div className="right-border">
                            <div className="right-icon"><i className="fi flaticon-quran"></i></div>
                            <div className="right-icon"><i className="fi flaticon-taj-mahal-1"></i></div>
                            <div className="right-icon"><i className="fi flaticon-allah-word"></i></div>
                            <div className="right-icon"><i className="fi flaticon-muhammad-word"></i></div>
                            <div className="right-icon"><i className="fi flaticon-prayer"></i></div>
                            <div className="right-icon"><i className="fi flaticon-business-and-finance"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;