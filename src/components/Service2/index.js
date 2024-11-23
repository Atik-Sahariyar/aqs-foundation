import React from 'react'
import { Link } from 'react-router-dom'
import service1 from '../../images/service/img-3.png'
import service2 from '../../images/service/img-4.png'
import service3 from '../../images/service/img-5.png'
import service4 from '../../images/service/img-6.png'
import service5 from '../../images/service/img-7.png'
import service6 from '../../images/service/img-8.png'
import './style.css'

const Service2 = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
      
    const serviceWrap = [
        {
           simg:service1,
           title:"Quran Memorization",
           link:"/service-single"
        },
        {
           simg:service2,
           title:"Special Child Care",
           link:"/service-single"
        },
        {
           simg:service3,
           title:"Mosque Development",
           link:"/service-single"
        },
        {
           simg:service4,
           title:"Matrimonial",
           link:"/service-single"
        },
        {
           simg:service5,
           title:"Funerals",
           link:"/service-single"
        },
        {
           simg:service6,
           title:"Help Poor",
           link:"/service-single"
        },
    ]

    return(
        <div className={`service-area-2 ${props.serviceClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>What We Offer</span>
                            <h2>Our Populer Services</h2>
                        </div>
                    </div>
                </div>
                <div className="service-wrap">
                    <div className="row">
                        {serviceWrap.map((item, i) => (
                            <div className="col-lg-4 col-md-6 col-sm-12 custom-grid col-12" key={i}>
                                <div className="service-single-item">
                                    <div className="service-single-img">
                                        <img src={item.simg} alt="" />
                                    </div>
                                    <div className="service-text">
                                        <h2><Link onClick={ClickHandler} to={item.link}>{item.title}</Link></h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service2;