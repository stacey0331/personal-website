import React from 'react';
import Experience from '../components/Experience';
import myResume from '../files/stacey-resume.pdf';
import aboutmeExperience from '../text/aboutme-experience'

// Images
import myPhoto1 from '../images/myPhoto1.JPG';
import myPhoto2 from '../images/myPhoto2.JPG';
import myPhoto3 from '../images/myPhoto3.JPG';
import photoJP from '../images/photoJP.jpg';
import photoDessert from '../images/photoDessert.jpg';
import photoNails from '../images/photoNails.jpg';
import photoFood from '../images/photoFood.jpg';
import illWebDev from '../images/webDev.svg';
import illMarketing from '../images/marketing.svg';
import illI18n from '../images/i18n.svg';
import illMath from '../images/math.svg';

// Icons
import resumeIcon from '../images/resumeIcon.png';
import igIcon from '../images/igIcon-colored.png';
import upIcon from '../images/upArrow.png';

const AboutMePage = () => (
        <>
            <h1>About me</h1>
            <p>Hi, I’m Stacey. I enjoy coding and want to become a software engineer in the future. </p>
            <p>Although I’m still exploring the different areas of software engineering,  I’m currently interested in building front-end applications the most.</p>
            <img class="myPhoto" src={myPhoto1} alt="Stacey 1" />
            <img class="myPhoto" src={myPhoto2} alt="Stacey 2" />
            <img class="myPhoto" src={myPhoto3} alt="Stacey 3" />
            <a href="#pageTop"><img class="backToTop" src={upIcon} alt=" " /></a>
            <br />
            <a href={myResume} target="_blank" rel="noopener noreferrer">
                <button>
                    My Resume (pdf)  <img class="buttonIcon" src={resumeIcon} alt=" " />
                </button>
            </a>
        
            <h2>Experience</h2>
            <div class="exp">
                <Experience info={aboutmeExperience[0]}/>
                <img class="expIll" src={illWebDev} alt="Web development" />  
            </div>

            <div class="exp">
                <Experience info={aboutmeExperience[1]} />
                <img class="expIll" src={illMarketing} alt="Marketing" />
            </div>

            <div class="exp">
                <Experience info={aboutmeExperience[2]} />
                <img class="expIll" src={illI18n} alt="Internationalization" /> 
            </div>

            <div class="exp">
                <Experience info={aboutmeExperience[3]} />
                <img class="expIll" src={illMath} alt="Math" />
            </div>

            <h2>Interests</h2>
            <p>Besides coding, I love dancing. </p>
            <p>Just like coding, dancing allows me to be creative and express myself. </p>
            <p>I co-founded “KCDC Monta Vista, ” a dance team under the Korean club in Monta Vista High School. We did K-pop dance covers and performances.</p>
            <p>Some of our best videos:</p>
            <iframe title="16 shots cover" width="560" height="315" src="https://www.youtube-nocookie.com/embed/fdqfjg8IWzU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title="feel special cover" width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ca0zq1btC50" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe title="16 shots performance" width="560" height="315" src="https://www.youtube-nocookie.com/embed/ohYnd45sodM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
            <br/><br/>
            <p>I also just enjoy learning new skills in general! </p>
            <p>Some of the other skills I have are: </p>
            <p>Doing nails, photography, hair coloring, etc. </p>
            <p>( follow my nails instagram page <a class="coloredLink" href="https://www.instagram.com/nailsbystaceyl/" target="_blank" rel="noopener noreferrer">here</a> —> <a href="https://www.instagram.com/nailsbystaceyl/" ><img class="buttonIcon" src={igIcon} alt="Insta" target="_blank" rel="noopener noreferrer"/></a> )</p>
            
            <br/><br/>
            <div class="grid-container-2">
                <img class="interestsPic" src={photoJP} alt="Japan" />
                <img class="interestsPic" src={photoDessert} alt="Desserts" />
                <img class="interestsPic" src={photoFood} alt="Food" />
                <img class="interestsPic" src={photoNails} alt="Nails" />
            </div>
            <br /><br /><br /><br />
        </>
    );  

export default AboutMePage;