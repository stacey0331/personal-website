import React, { Component } from 'react';
import backPic from '../images/backPic.JPG';
import emailIcon from '../images/emailIcon.png';
import curlyArrow from '../images/curlyArrow.png';

import api from '../api';

class ContactMePage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         email: '',
         message: '',
      };
   }

   handleChangeName = event => {
      const name = event.target.value;
      this.setState({
         name: name
      });

      console.log("name = " + this.state.name);
      console.log("email = " + this.state.email);
      console.log("message = " + this.state.message);

   }

   handleChangeEmail = event => {
      const email = event.target.value;
      this.setState({
         email: email
      });

      console.log("name = " + this.state.name);
      console.log("email = " + this.state.email);
      console.log("message = " + this.state.message);

   }

   handleChangeMessage = event => {
      const message = event.target.message;
      this.setState({
         message: message
      });

      console.log("name = " + this.state.name);
      console.log("email = " + this.state.email);
      console.log("message = " + this.state.message);

   }

   handleIncludeResponse = event => {
      event.preventDefault();
      const { name, email, message } = this.state;
      const payload = {
         name: name, 
         email: email, 
         message: message, 
      };

      api.createResponse(payload)
         .then((res) => {
            window.alert('Message sent successfully');
            this.setState({
               name: '',
               email: '',
               message: '',
            });
         })
   }

   render() {
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
               <input placeholder="Format First Last" id="yourName" onClick={this.handleChangeName} required/><br />
      
               <label className="required" htmlFor="yourEmail">Your email</label><br />
               <input type="email" placeholder="email@address.com" id="yourEmail" onClick={this.handleChangeEmail} required/><br />
               
               <label className="required" htmlFor="message">Message</label><br />
               <textarea id="message" onClick={this.handleChangeMessage} required></textarea><br /><br />
      
               <button type="submit" onClick={this.handleIncludeResponse}>Send</button>
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

}


export default ContactMePage;