import React from "react";
import HomeIcon from '../../images/Icons/Home.svg'
import ServiceIcon from '../../images/Icons/Services.svg'
import EduIcon from '../../images/Icons/cv.svg'
import PortfolioIcon from '../../images/Icons/Portfolio.svg'
import BlogIcon from '../../images/Icons/Blog.svg'
import ContactIcon from '../../images/Icons/Contact.svg'
import { Link } from "react-router-dom";
import './RightMenu.scss';




const RightMenu = () =>{
    return(
        <ul className="rightMenu">
            <Link to={"/"} className="rightMenu_ListItem">
                <img src={HomeIcon}></img>
            </Link>
            <Link to={"/service"} className="rightMenu_ListItem">
                <img src={ServiceIcon}></img>
            </Link>
            <Link to={"/edu"} className="rightMenu_ListItem">
                <img src={EduIcon}></img>
            </Link>
            <Link to={"/portfolio"} className="rightMenu_ListItem">
                <img src={PortfolioIcon}></img>
            </Link>
            <Link to={"/blog"} className="rightMenu_ListItem">
                <img src={BlogIcon}></img>
            </Link>
            <Link to={"/contact"} className="rightMenu_ListItem">
                <img src={ContactIcon}></img>
            </Link>
        </ul>
    )
    
}

export default RightMenu;