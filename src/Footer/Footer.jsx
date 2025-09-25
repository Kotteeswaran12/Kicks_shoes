import React from "react";
import "./Footer.css"
import { PiTwitterLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
    return (
        <div className="footer">
            <div className="FooterInner">
                <div className="FooterSection1">
                    <div className="input">
                        <h3>Join our KicksPlus Club & get 15% off</h3>
                        <p>Sign up for free! Join the community.</p>
                        <div className="textbox">
                            <input type="text" placeholder="Enter Address" />
                            <button>Submit</button>
                        </div>
                    </div>
                    <div className="bigLogo">
                        <h1>KICKS</h1>
                    </div>
                </div>


                <div className="FooterSection2">
                    <div className="FooterMain">
                        <div className="Part">
                            <h3>About Us</h3>
                            <p>We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.</p>
                        </div>
                        <div className="Part">
                            <h3>Categories</h3>
                            <ul>
                                <li>Runner</li>
                                <li>Sneakers</li>
                                <li>Basketball</li>
                                <li>Outdoor</li>
                                <li>Golf</li>
                                <li>Hiking</li>
                            </ul>
                        </div>
                        <div className="Part">
                            <h3>Company</h3>
                            <ul>
                                <li>About</li>
                                <li>Contact</li>
                                <li>Blogs</li>

                            </ul>
                        </div>
                        <div className="Part">
                            <h3>Follow us</h3>
                            <div className="socialMedia">
                                <PiTwitterLogoFill size={25} className="icon"/>
                                <FaFacebook size={25}className="icon" />
                                <FaInstagram size={25} className="icon"/>
                            </div>
                        </div>
                    </div>
                    <div className="Logo">
                        <h1>KICKS</h1>
                    </div>

                </div>


            </div>
        </div>
    )
}
export default Footer;