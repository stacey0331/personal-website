import React from 'react';
import backPic from '../images/backPic.JPG';
import emailIcon from '../images/emailIcon.png';
import curlyArrow from '../images/curlyArrow.png';

const ContactMePage = () => (
 <>
    <h1>Contact me</h1>
    Feel free to contact me regarding anything (including your thoughts on this site :) 
    <br />
    Or, contact me through email <a class="coloredLink" href="mailtostaceyleetsaihsun@gmail.com">staceyleetsaihsun@gmail.com</a>
    <img class="buttonIcon" src={emailIcon} alt=" " />

   <div class="grid-container-2">
      <form>
         <label class="required" for="yourName">Your name </label><br />
         <input placeholder="Format First Last" id="yourName" required/><br />

         <label class="required" for="yourEmail">Your email</label><br />
         <input type="email" placeholder="email@address.com" id="yourEmail" required/><br />
         
         <label class="required" for="message">Message</label><br />
         <textarea id="message" required></textarea><br /><br />

         <button type="submit">Send</button>
      </form>
      <img class="contactMeImg" src={backPic} alt="Stacey" />
   </div>
   <br /><br /><br /><br />
   <div class="socialsText">
      Connect with me on socials <img class="curlyArrow" src={curlyArrow} alt="arrow" />
   </div>
 </>
);

export default ContactMePage;