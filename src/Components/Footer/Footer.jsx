import "./Footer.css";
import logo from '../../Assets/Logo.svg';
import mapIcon from '../../Assets/map-pin.png';
import callIcon from '../../Assets/phone-call.png';
import mailIcon from '../../Assets/mail.png';
import instagramIcon from '../../Assets/instagram.png';
import facebookIcon from '../../Assets/facebook.png';
import youtubeIcon from '../../Assets/youtube.png';
import twitterIcon from '../../Assets/twitter.png';

import React from 'react'

export default function Footer() {
  return (
    <div className="footer-container">
        <footer>
            <div className="footer-menu">
            <div className="logo-sec">
                <img src={logo} alt="logo" />
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                <div className="footer-details">
                    <img src={mapIcon} alt="pin" />
                    <p>Cross Roads, forest towers,410001</p>
                </div>
                <div className="footer-details">
                    <img src={callIcon} alt="call" />
                    <p>+123-123-4545</p>
                </div>
                <div className="footer-details">
                    <img src={mailIcon} alt="mail" />
                    <p>georgeme@abc.com</p>
                </div>
            </div>
            <div className="about-section">
                <h4>About</h4>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat .</p>
            </div>
            <div className="quick-links">
                <h4>Quick Links</h4>
                <p>Dashboard</p>
                <p>Elements</p>
                <p>Forms</p>
                <p>Charts</p>
                <p>Tables</p>
                <p>Other Pages</p>
            </div>
            <div className="information-sec">
                <h4>Information</h4>
                <p>Our Team</p>
                <p>Contact US</p>
                <p>About</p>
                <p>Services</p>
                <p>Blog</p>
                <p>Terms and Services</p>
            </div>
            </div>
            <div className="footer-social">
                <div className="footer-copyright">
                    <p>Copyright © 2023 <span className="font">Azea</span>. Designed with <span className="heart">&hearts;</span> by <span className="font">Spruko</span> All rights reserved.</p>
                </div>
                <div className="footer-socialicon">
                    <div>
                        <img src={twitterIcon} alt="tw" />
                    </div>
                    <div>
                        <img src={youtubeIcon} alt="yt" />
                    </div>
                    <div>
                        <img src={facebookIcon} alt="fb" />
                    </div>
                    <div>
                        <img src={instagramIcon} alt="ig" />
                    </div>
                </div>    
            </div>
        </footer>
    </div>
  )
}

