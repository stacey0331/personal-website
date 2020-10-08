import React from 'react';
import igIcon from '../images/igIcon.png';
import inIcon from '../images/linkedinIcon.png';
import fbIcon from '../images/fbIcon.png';

const Footer = () => (
 <div className="footer">
    <div className="copyright">Copyright ©2020 Stacey Lee</div>
     <div className="socials">
        <a href="https://www.linkedin.com/in/stacey-lee-598719191/" target="_blank" rel="noopener noreferrer">
            <img className="social" src={inIcon} alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/staceylee2002/" target="_blank" rel="noopener noreferrer">
            <img className="social" src={igIcon} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/stacey.lee.357284" target="_blank" rel="noopener noreferrer">
            <img className="social" src={fbIcon} alt="Facebook" />
        </a>
     </div>
 </div>
);

export default Footer;