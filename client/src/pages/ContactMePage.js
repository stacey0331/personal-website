import React from 'react';
import backPic from '../images/backPic.JPG';
import emailIcon from '../images/emailIcon.png';
import curlyArrow from '../images/curlyArrow.png';

import api from '../api';

const ContactMePage = () => {
   let handleIncludeResponse = event => {
      event.preventDefault();
      const name = document.getElementById('yourName').value;
      const email = document.getElementById('yourEmail').value;
      const message = document.getElementById('message').value;

      api.createResponse(name, email, message)
         .then((res) => {
            if (alert('Message sent successfully')) {}
            else window.location.reload();
         })
   }

   return (
      <>
         <h1>Contact me</h1>
         Feel free to contact me regarding anything (including your thoughts on this site :) 
         <br />
         Or, contact me through email <a className="coloredLink" href="mailtostaceyleetsaihsun@gmail.com">staceyleetsaihsun@gmail.com</a>
         <img className="buttonIcon" src={emailIcon} alt=" " />
   
      <div className="grid-container-2">
         <form>
            <label className="required" htmlFor="yourName">Your name </label><br />
            <input placeholder="Format First Last" id="yourName" required/><br />
   
            <label className="required" htmlFor="yourEmail">Your email</label><br />
            <input type="email" placeholder="email@address.com" id="yourEmail" required/><br />
            
            <label className="required" htmlFor="message">Message</label><br />
            <textarea id="message" required></textarea><br /><br />
   
            <button type="submit" onClick={handleIncludeResponse}>Send</button>
         </form>
         <img className="contactMeImg" src={backPic} alt="Stacey" />
      </div>
      <br /><br /><br /><br />
      <div className="socialsText">
         Connect with me on socials <img className="curlyArrow" src={curlyArrow} alt="arrow" />
      </div>
      </>
   );
}

export default ContactMePage;