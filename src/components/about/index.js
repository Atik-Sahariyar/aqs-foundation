import React from 'react'
import { Link } from 'react-router-dom'
import tmr1 from '../../images/prayer-shape/2.png'
import tmr2 from '../../images/prayer-shape/1.png'
import tmr3 from '../../images/prayer-shape/3.png'
import VideoModal from '../ModalVideo'
import './style.css'

const About = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className="wpo-about-area section-padding">
            <div className="container">
                <div className="wpo-about-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="wpo-about-img-3">
                                <img src={props.aboutImg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 colsm-12">
                            <div className="wpo-about-text">
                                <div className="wpo-section-title">
                                    <span>About Azmain QS Foundation</span>
                                    <h2>Empowering Communities Through Islamic Education and Compassion</h2>
                                </div>
                                <p>Azmain QS Foundation, short for Azmain Quran Sunnah Foundation, is a dedicated non-profit organization that aims to uplift communities by promoting the teachings of the Quran and Sunnah. Our foundation is committed to establishing educational and welfare programs, including Lillah boarding facilities for underprivileged students, orphan care, a Qaumi Madrasah, an Islamic library, and Quran learning programs for adults. Through these initiatives, we strive to create opportunities for both spiritual and academic growth. Among our achievements is the establishment of Baitul Mamur Jame Masjid in Lalkhartari, Kurigram, where the community gathers to worship and learn. At Azmain QS Foundation, our mission is to serve Allah’s path by fostering a compassionate, educated, and connected community.</p>
                                <div className="btns">
                                    <Link onClick={ClickHandler} to="/about" className="theme-btn" tabIndex="0">Discover More</Link>
                                    <ul>
                                        <li className="video-holder">
                                            <VideoModal />
                                        </li>
                                        <li className="video-text">
                                            Watch Our Video
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="timer-section">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="timer-text">
                                <h2>Prayer Times</h2>
                                <p>Prayer times in Bangladesh</p>
                                <span>September, 2024</span>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="timer-num">
                                <ul>
                                    <li>Fajr<span>4:50 AM</span></li>
                                    <li>Sunrize<span>6:08 AM</span></li>
                                    <li>Dhuhr<span>11:42 AM</span></li>
                                    <li>Asr<span>3:40 PM</span></li>
                                    <li>Maghrib<span>5:16 PM</span></li>
                                    <li>Isha'a<span>6:33 PM</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="timer-shape1">
                        <img src={tmr1} alt="" />
                    </div>
                    <div className="timer-shape2">
                        <img src={tmr2} alt="" />
                    </div>
                    <div className="timer-shape3">
                        <img src={tmr3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;