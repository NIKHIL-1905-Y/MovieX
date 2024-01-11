import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                 Explore Movix for an immersive movie experience. 
                 Discover classics and new releases across genres.
                 Enjoy personalized recommendations and seamless access to your favorite films anytime. 
                 Join our LinkedIn Community @NikhilYadav. © 2024 Movix. Connect with us for more movie magic. Thank you for choosing Movix.
                 Created By:Nikhil Kumar
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                       <a href="https://www.linkedin.com/in/nikhil-kr-yaduvanshi/"><FaLinkedin /></a> 
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
