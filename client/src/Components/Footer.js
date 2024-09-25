import React from "react";
import "../styles/footerStyles.css"
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"
import tweeter from "../images/tweeter.png"

const Footer = () => {
    return (
        <footer className="footer-distributed">

            <div className="footer-left">

                <h3><span>Tech Blog</span> project</h3>
                <p className="footer-company-name">Akash Dangare © 2023</p>

                <div className="footer-icons">

                    <a href="https://www.linkedin.com/in/akash-dangare-5b0a92221/"><img src={linkedin} alt="linkedin"/></a>
                    <a href="https://github.com/AkashDangare911"><img src={github} alt="github"/></a>
                    <a href="https://twitter.com/AkashDangare911"><img src={tweeter} alt="tweeter"/></a>

                </div>
            </div>

            <div className="footer-center">

                <div>
                    <p>Swargate, Pune, Maharashtra</p>
                </div>

                <div>
                    <p>+91 8459631579</p>
                </div>

                <div>
                    <p><a href="mailto:akashdangare101@gmail.com">akashdangare101.com</a></p>
                </div>

            </div>

            <div className="footer-right">

                <p className="footer-company-about">
                    <span>About Me</span>
                    I am a final year undergraduate student pursuing Bachelor of Engineering from Pune. This project is made to showcase my proficiency in development.
                </p>
  
            </div>

        </footer>

    );
};

export default Footer;