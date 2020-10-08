import React from 'react';
import portfolioProject from '../text/portfolio-project.js'
import NotFoundPage from './NotFoundPage';
import githubIcon from '../images/githubIcon.png';
import tarIcon from '../images/tarIcon.png';
import leftArrow from '../images/leftArrow.png';

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
        appExplained = "Oops! The author is still making this video :) watch videos in other projects"
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
                <br/><br/><button>Download .tar file<img class="buttonIcon" src={tarIcon} alt=" "/></button>
                <br/><br/>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <button class={project.githubLink ? 'githubButton' : 'unlinkedButton githubButton' }>View on GitHub<img class="buttonIcon" src={githubIcon} alt=" "/></button>
                </a>

                <h2>App Explained</h2>
                {appExplained}
            </p>
            <br /><br /><br /><br />
        </>
    )
};

export default ProjectPage;