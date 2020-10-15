import React from 'react';
import portfolioProject from '../text/portfolio-project'
import NotFoundPage from './NotFoundPage';
import githubIcon from '../images/githubIcon.png';
import dirIcon from '../images/dirIcon.png';
import leftArrow from '../images/leftArrow.png';

// Project files
import Econ101 from '../files/Econ101.zip';
import TrigCrashCourse from '../files/TrigCrashCourse.zip';

const ProjectPage = ({ match }) => {
    const name = match.params.name;
    const project = portfolioProject.find(project => project.name === name);
    let appExplained;

    // If the project is not found under the /portfooio endpoint
    if (!project) return <NotFoundPage />

    // Conditionally render the App epxlained video 
    if (project.vidLink) {
        appExplained =  <iframe title="App Explained" width="560" height="315" src={project.vidLink} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    } else {
        appExplained = <p>Oops! The author is still making this video :) watch the videos in other projects</p>
    }

    return (
        <>
            <div class="goBack">
                <a class="noUHover" href="/portfolio">
                    <img class="backArrow" src={leftArrow} alt=" " /> Go back
                </a>
            </div>
            <h1>{project.title}</h1>
            
            <p class="projectText">
                <span class="fields">Author(s): </span>{project.author} 
                <br/>
                <span class="fields">Date: </span>{project.date}
                <br/>
                <span class="fields">Technology used: </span>
                {project.techUsed.map((tech, key) => {
                    if (key === project.techUsed.length - 1) return <span key={key}>{tech}</span>
                    else return <span key={key}>{tech}, </span>
                })} 
                <br/>
                <span class="fields">Description: </span>
                <br />
                {project.description}
                {project.longDescription.map((paragraph, key) => (
                    <><br />{paragraph}</>
                ))}
                <br/><br/>
                {
                    // eslint-disable-next-line
                }<a href={project.dirDownload === "Econ101" ? Econ101 : project.dirDownload === "TrigCrashCourse" ? TrigCrashCourse : ''}>
                    <button class={project.dirDownload ? '' : 'unlinkedButton'} disabled={!project.dirDownload}>
                        Download folder<img class="buttonIcon" src={dirIcon} alt=" "/>
                    </button>
                </a>

                <br/><br/>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <button class={project.githubLink ? 'githubButton' : 'unlinkedButton githubButton' } disabled={!project.githubLink}>View on GitHub<img class="buttonIcon" src={githubIcon} alt=" "/></button>
                </a>
            </p>
            <h2>App Explained</h2>
            {appExplained} 
            <br /><br /><br /><br />
        </>
    )
};

export default ProjectPage;