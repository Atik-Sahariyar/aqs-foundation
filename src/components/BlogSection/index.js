import React from 'react'
import author from '../../images/blog/admin.jpg'
import {Link} from 'react-router-dom'

import './style.css'

const BlogSection = (props) => {
    
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

     const Blog = [
         {
           blogImg:  props.blogImg1,
           title:"The Importance of Marriage in Islam.",
           authorName:'Jenefar Jany',
           date:'21 Jan 2021',
           link:"/blog-details"
         },
         {
           blogImg:  props.blogImg2,
           title:"Salat is the best exercise for body fitness",
           authorName:'Jenefar Jany',
           date:'21 Jan 2021',
           link:"/blog-details"
         },
         {
           blogImg:  props.blogImg3,
           title:"Salat is the best exercise for body fitness",
           authorName:'Jenefar Jany',
           date:'21 Jan 2021',
           link:"/blog-details"
         },
     ]
    return(
        <div className="blog-area section-padding">
            <div className="container">
                <div className="col-l2">
                    <div className="wpo-section-title">
                        <span>From Our Blog</span>
                        <h2>Latest News</h2>
                    </div>
                </div>
                <div className="row">
                    {Blog.map((blog, bl) => (
                        <div className="col-lg-4 col-md-6 col-12 custom-grid" key={bl}>
                            <div className="blog-item">
                                <div className="blog-img">
                                <img src={blog.blogImg} alt="" />
                                </div>
                                <div className="blog-content">
                                    <h3><Link onClick={ClickHandler} to={blog.link}>{blog.title}</Link></h3>
                                    <ul className="post-meta">
                                        <li><img src={author} alt="" /></li>
                                        <li><Link onClick={ClickHandler} to={blog.link}>{blog.authorName}</Link></li>
                                        <li><i className="fa fa-clock-o" aria-hidden="true"></i> {blog.date}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogSection;