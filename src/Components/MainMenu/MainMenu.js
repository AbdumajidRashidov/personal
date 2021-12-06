import React from 'react'
import logoNajot from "../../images/Najot_Talim.png"
import asaxiyLogo from '../../images/asaxiy.png'
// import myImg from '../../images/myimg-removebg-preview.png'
import './Home.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = ()=>{
    const settings = {
        dots: false,
        infinite: true,
        arrows:false,
        speed: 1000,
        autoplay:true,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1
      };
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
            
            <div className="partners">
            <Slider {...settings}>
                <div className="partners_item">
                    <img width="150" src={logoNajot} alt="logo"></img>
                </div>
                <div className="partners_item">
                    <img width="150" src={asaxiyLogo} alt="logo"></img>
                </div>
                <div className="partners_item">
                    <img width="150" src={logoNajot} alt="logo"></img>
                </div>
                <div className="partners_item">
                    <img width="150" src={asaxiyLogo} alt="logo"></img>
                </div>
                <div className="partners_item">
                    <img width="150" src={logoNajot} alt="logo"></img>
                </div>
                <div className="partners_item">
                    <img width="150" src={asaxiyLogo} alt="logo"></img>
                </div>

             </Slider>
            </div>
        </div>
    )
}
 export default Home