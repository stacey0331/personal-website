import React from 'react';
import profilePic from '../images/profilePic.JPG'

const HomePage = () => (
 <>
    <img id="avatar" src={profilePic} alt="Avatar" />
    <div class="homeTitle">Hi, I'm Stacey Lee</div>
    <div class="homeSubtitle">an aspiring CS student</div>
 </>
);

export default HomePage;