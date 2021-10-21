import React from "react";
import {OverlayTrigger, Tooltip} from 'react-bootstrap'
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
            <li>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Home!</Tooltip>}>
                    <span className="d-inline-block">
                        <Link to={"/"} className="rightMenu_ListItem">
                            <img src={HomeIcon}></img>
                        </Link>
                    </span>
                </OverlayTrigger>
            </li>
            <li>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Services!</Tooltip>}>
                    <span className="d-inline-block">
                        <Link to={"/service"} className="rightMenu_ListItem">
                            <img src={ServiceIcon}></img>
                        </Link>
                    </span>
                </OverlayTrigger>
            </li>
            <li>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Education!</Tooltip>}>
                    <span className="d-inline-block">
                        <Link to={"/edu"} className="rightMenu_ListItem">
                            <img src={EduIcon}></img>
                        </Link>
                    </span>
                </OverlayTrigger>
            </li>
            <li>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Portfolio!</Tooltip>}>
                    <span className="d-inline-block">
                        <Link to={"/portfolio"} className="rightMenu_ListItem">
                            <img src={PortfolioIcon}></img>
                        </Link>
                    </span>
                </OverlayTrigger>
            </li>
            <li>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Blog!</Tooltip>}>
                    <span className="d-inline-block">
                        <Link to={"/blog"} className="rightMenu_ListItem">
                            <img src={BlogIcon}></img>
                        </Link>
                    </span>
                </OverlayTrigger>
            </li>
            <li>
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Contact!</Tooltip>}>
                    <span className="d-inline-block">
                        <Link to={"/contact"} className="rightMenu_ListItem">
                            <img src={ContactIcon}></img>
                        </Link>
                    </span>
                </OverlayTrigger>
            </li>
        </ul>
    )
    
}

export default RightMenu;