import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import tmr1 from '../../images/prayer-shape/2.png';
import tmr2 from '../../images/prayer-shape/1.png';
import tmr3 from '../../images/prayer-shape/3.png';
import VideoModal from '../ModalVideo';
import './style.css';

const About = (props) => {
  const [prayerTimes, setPrayerTimes] = useState({});
  const [loading, setLoading] = useState(true);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const date = new Date();
  const currentMonth = date.toLocaleString("default", { month: "long" });
  const currentYear = date.getFullYear();

  // Fetch Prayer Times
  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await fetch(
          `https://api.aladhan.com/v1/timingsByCity?city=Dhaka&country=Bangladesh&method=2`
        );
        const data = await response.json();
        setPrayerTimes(data.data.timings);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching prayer times:", error);
      }
    };

    fetchPrayerTimes();
  }, []);

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
                <span>{currentMonth}, {currentYear}</span>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="timer-num">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <ul>
                    <li>Fajr<span>{prayerTimes.Fajr}</span></li>
                    <li>Sunrise<span>{prayerTimes.Sunrise}</span></li>
                    <li>Dhuhr<span>{prayerTimes.Dhuhr}</span></li>
                    <li>Asr<span>{prayerTimes.Asr}</span></li>
                    <li>Maghrib<span>{prayerTimes.Maghrib}</span></li>
                    <li>Isha<span>{prayerTimes.Isha}</span></li>
                  </ul>
                )}
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
  );
};

export default About;
