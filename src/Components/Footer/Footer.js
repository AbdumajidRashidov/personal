import React from "react";
import { Row, Col } from "react-bootstrap-v5";
import './FooterStyle.scss';
const Footer = () =>{
    return(
        <Row>
            <Col md={12}>
                <div className="footer">
                    <p className="copyright">
                        2021 All Rights Reserved 
                    </p>
                </div>
            </Col>
        </Row>
    )
    
}

export default Footer;
