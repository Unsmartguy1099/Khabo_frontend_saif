import { Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
    <div className="footer">       
        <Container>
            <Row >
                <ul> 
                    <li className="foot-menu-item mbr-fonts-style display-7">
                        <a className="text-white" href="#" target="_blank">About us</a>
                    </li><li className="foot-menu-item mbr-fonts-style display-7">
                        <a className="text-white" href="#" target="_blank">Services</a>
                    </li><li className="foot-menu-item mbr-fonts-style display-7">
                        <a className="text-white" href="#" target="_blank">Contact Us</a>
                    </li><li className="foot-menu-item mbr-fonts-style display-7">
                        <a className="text-white" href="#" target="_blank">Careers</a>
                    </li><li className="foot-menu-item mbr-fonts-style display-7">
                        <a className="text-white" href="#" target="_blank">Work</a>
                    </li>
                </ul>
            </Row>
            <Row>
                <div className="social-list align-right pb-2">      
                <div className="soc-item">
                        <a href="https://twitter.com/mobirise" target="_blank">
                            <span className="socicon-twitter socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                    </div><div className="soc-item">
                        <a href="https://www.facebook.com/pages/Mobirise/1616226671953247" target="_blank">
                            <span className="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                    </div><div className="soc-item">
                        <a href="https://www.youtube.com/c/mobirise" target="_blank">
                            <span className="socicon-youtube socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                    </div><div className="soc-item">
                        <a href="https://instagram.com/mobirise" target="_blank">
                            <span className="socicon-instagram socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                    </div><div className="soc-item">
                        <a href="https://plus.google.com/u/0/+Mobirise" target="_blank">
                            <span className="socicon-googleplus socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                    </div><div className="soc-item">
                        <a href="https://www.behance.net/Mobirise" target="_blank">
                            <span className="socicon-behance socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                    </div></div>
            </Row>
            <Row>
                <p style={{color:"white",fontSize:"20px"}}>
                    © Copyright 2023 Team Khabo. All Rights Reserved.
                </p>
            </Row>
        </Container>
    </div>
    );
};

export default Footer;