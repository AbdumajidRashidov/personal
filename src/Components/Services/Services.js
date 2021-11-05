import React from "react";
import imgSevice from '../../images/Icons/coding.svg'
import './services.scss'

const Service = ()=>{
    return(
        <div className="my_services">
                <h2 className="my_services-head">My Services</h2>
                <p className="my_services-paragraph">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. lorem ipsum
                </p>
                <div className="services_list">
                    <a className="services_list-item" href="#">
                        <div className="front">
                            <img src={imgSevice} alt=""></img>
                            <h4>Web development</h4>
                            <p>Blog, e-Commerce</p>
                        </div>
                        <div className="back">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Vitae nulla diam in ac dictum a urna viverra morbi.
                            </p>
                            <a href="#">
                                ORDER NOW
                            </a>
                        </div>
                    </a>
                    <a className="services_list-item" href="#">
                        <div className="front">
                            <img src={imgSevice} alt=""></img>
                            <h4>Web development</h4>
                            <p>Blog, e-Commerce</p>
                        </div>
                        <div className="back">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Vitae nulla diam in ac dictum a urna viverra morbi.
                            </p>
                            <a href="#">
                                ORDER NOW
                            </a>
                        </div>
                    </a>
                    <a className="services_list-item" href="#">
                        <div className="front">
                            <img src={imgSevice} alt=""></img>
                            <h4>Web development</h4>
                            <p>Blog, e-Commerce</p>
                        </div>
                        <div className="back">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Vitae nulla diam in ac dictum a urna viverra morbi.
                            </p>
                            <a href="#">
                                ORDER NOW
                            </a>
                        </div>
                    </a>
                    <a className="services_list-item" href="#">
                        <div className="front">
                            <img src={imgSevice} alt=""></img>
                            <h4>Web development</h4>
                            <p>Blog, e-Commerce</p>
                        </div>
                        <div className="back">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Vitae nulla diam in ac dictum a urna viverra morbi.
                            </p>
                            <a href="#">
                                ORDER NOW
                            </a>
                        </div>
                    </a>
                    <a className="services_list-item" href="#">
                        <div className="front">
                            <img src={imgSevice} alt=""></img>
                            <h4>Web development</h4>
                            <p>Blog, e-Commerce</p>
                        </div>
                        <div className="back">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Vitae nulla diam in ac dictum a urna viverra morbi.
                            </p>
                            <a href="#">
                                ORDER NOW
                            </a>
                        </div>
                    </a>
                    <a className="services_list-item" href="#">
                        <div className="front">
                            <img src={imgSevice} alt=""></img>
                            <h4>Web development</h4>
                            <p>Blog, e-Commerce</p>
                        </div>
                        <div className="back">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Vitae nulla diam in ac dictum a urna viverra morbi.
                            </p>
                            <a href="#">
                                ORDER NOW
                            </a>
                        </div>
                    </a>
                </div>
            </div>
    )
}
export default Service