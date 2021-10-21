import React from "react";
import MyImg from '../../images/myimg.jpeg';
import '@fortawesome/fontawesome-free/js/all';
import {ProgressBar} from 'react-bootstrap'
import './LeftMenu.scss'

const LeftMenu = ()=>{
    return(
        <div className="leftMenu">
            <div className="leftMenu_Top">
                <img src={MyImg} width="150"></img>
                <h3 className="name">Abdumajid Rashidov</h3>
                <p className="profession">Frontend Developer</p>
                <div className="wrapper_social_links">
                    <a className="social_links" href="https//facebook.com"><i class="fab fa-facebook-f"></i></a>
                    <a className="social_links" href="https//facebook.com"><i class="fab fa-instagram"></i></a>
                    <a className="social_links" href="https//facebook.com"><i class="fab fa-twitter"></i></a>
                    <a className="social_links" href="https//facebook.com"><i class="fab fa-linkedin-in"></i></a>
                    <a className="social_links" href="https//facebook.com"><i class="fab fa-telegram-plane"></i></a>
                    <a className="social_links" href="https//facebook.com"><i class="fab fa-github"></i></a>
                </div>
                <hr className="hr"></hr>
            </div>
            <div className="leftMenu_info">
                <ul className="Info_list">
                    <li className="Info_list-item">
                        <span className="key">Age:</span><span className="value">21</span>
                    </li>
                    <li className="Info_list-item">
                        <span className="key">Residence:</span><span className="value">UZ</span>
                    </li>
                    <li className="Info_list-item">
                        <span className="key">Freelance:</span><span className="value aviable">Available</span>
                    </li>
                    <li className="Info_list-item">
                        <span className="key">Address:</span><span className="value"> Tashkent, Uzbekistan</span>
                    </li>
                </ul>
            <hr className="hr"></hr>
            </div>
            <div className="languages_section">
                <h3>Languages</h3>
                <div className="language">
                    <p>
                        <span className="language_name">Uzbek</span><span className="percentage">100%</span>
                    </p>
                    <ProgressBar variant="warning"  now={100}  />
                </div>
                <div className="language">
                    <p>
                        <span className="language_name">English</span><span className="percentage">80%</span>
                    </p>
                    <ProgressBar variant="warning"  now={80}  />
                </div>
                <div className="language">
                    <p>
                        <span className="language_name">Russian</span><span className="percentage">60%</span>
                    </p>
                    <ProgressBar variant="warning"  now={60}  />
                </div>
                <hr className="hr"></hr>
            </div>
        </div>

    )
}
export default LeftMenu;