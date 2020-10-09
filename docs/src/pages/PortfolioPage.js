import React from 'react';
import ProjectPreview from '../components/ProjectPreview';
import portfolioProject from '../text/portfolio-project';

// Projects' preview images
import person1 from '../images/project-snapshots/Personal-1.png';
import econ1 from '../images/project-snapshots/Econ-1.png';
import trig1 from '../images/project-snapshots/Trig-1.png'

const PortfolioPage = () => (
 <>
    <h1>Portfolio</h1>
    <p>Here’re a selection of some of my programming projects</p>

    <div class="projectPreviews">
      <ProjectPreview project={portfolioProject[0]} img={person1} />
      <ProjectPreview project={portfolioProject[1]} img={econ1} />
      <ProjectPreview project={portfolioProject[2]} img={trig1} />
    </div>
 </>
);

export default PortfolioPage;