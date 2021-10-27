import React from 'react'
// import myImg from '../../images/myimg-removebg-preview.png'
import imgSevice from '../../images/Icons/coding.svg'
import { Rerousel,Item } from 'rerousel';
import './Home.scss'
const Home = ()=>{
    return(
        <div className="home">
            <div className="main_banner">
                <div className="main_banner_info">
                    <h2 className="main_banner_info-head">I'm Abdumajid Rashidov <span>Front-end</span> Developer</h2>
                    <p className="main_banner_info-paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat 
                        placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
                    </p>
                    <a href="#" className="hireMe">Hire me</a>
                </div>
                <div className="main_banner_img">
                    {/* <img src='' alt="myimg"></img> */}
                </div>
            </div>
            <div className="my_services">
                <h2 className="my_services-head">My Services</h2>
                <p className="my_services-paragraph">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. lorem ipsum
                </p>
                <div className="services_list">
                    <a className="services_list-item" href="#">
                        <img src={imgSevice} alt=""></img>
                        <h4>Web development</h4>
                        <p>Blog, e-Commerce</p>
                    </a>
                    <a className="services_list-item" href="#">
                        <img src={imgSevice} alt=""></img>
                        <h4>Web development</h4>
                        <p>Blog, e-Commerce</p>
                    </a>
                    <a className="services_list-item" href="#">
                        <img src={imgSevice} alt=""></img>
                        <h4>Web development</h4>
                        <p>Blog, e-Commerce</p>
                    </a>
                    <a className="services_list-item" href="#">
                        <img src={imgSevice} alt=""></img>
                        <h4>Web development</h4>
                        <p>Blog, e-Commerce</p>
                    </a>
                    <a className="services_list-item" href="#">
                        <img src={imgSevice} alt=""></img>
                        <h4>Web development</h4>
                        <p>Blog, e-Commerce</p>
                    </a>
                    <a className="services_list-item" href="#">
                        <img src={imgSevice} alt=""></img>
                        <h4>Web development</h4>
                        <p>Blog, e-Commerce</p>
                    </a>
                </div>
            </div>
            <div className="partners">
            <Rerousel >
                <Item>1</Item>
                <Item>2</Item>
                <Item>3</Item>
                <Item>4</Item>
                <Item>5</Item>
            </Rerousel>
            </div>
        </div>
    )
}
 export default Home