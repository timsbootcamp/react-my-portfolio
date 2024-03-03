import React from 'react';
import { Link } from 'react-router-dom';

import proj1 from '../../assets/images/01.jpg';
import proj2 from '../../assets/images/passwordgenerator.jpg';
import proj3 from '../../assets/images/coding-quiz.jpg';
import proj4 from '../../assets/images/work-day-scheduler.jpg';
import proj5 from '../../assets/images/weather-dashboard.jpg';
import proj6 from '../../assets/images/weather-dashboard.jpg';

const projectData = [
  {
    "id": "0",
    "title": "Analyse Financial Records",
    "description": "Challenge 4 of edX Boot Camp (Front End) to create Javascript code for analyzing the financial records of a company.",
    "image": proj1,
    "githubUrl": "https://github.com/timsbootcamp/Console-Finances",
    "deployedUrl": "https://timsbootcamp.github.io/Console-Finances/"
  },
    {
      "id": "1",
      "title": "Password Generator",
      "description": "Challenge 5 of edX Boot Camp (Front End) to create Javascript Password Generator.",
      "image": proj2,
      "githubUrl": "https://github.com/timsbootcamp/js-password-generator",
      "deployedUrl": "https://timsbootcamp.github.io/js-password-generator/"
    },
  {
    "id": "2",
    "title": "Coding Quiz",
    "description": "Challenge 6 of edX Boot Camp (Front End) to create Code Quiz using Web API.",
    "image": proj3,
    "githubUrl": "https://github.com/timsbootcamp/webapi-code-quiz",
    "deployedUrl": "https://timsbootcamp.github.io/webapi-code-quiz/"
  },
  {
    "id": "3",
    "title": "Work Day scheduler",
    "description": "Challenge 7 of edX Boot Camp (Front End) to create a simple calendar application.",
    "image": proj4,
    "githubUrl": "https://github.com/timsbootcamp/third-party-api-work-day-scheduler",
    "deployedUrl": "https://timsbootcamp.github.io/third-party-api-work-day-scheduler/"
  },
  {
    "id": "4",
    "title": "Weather Dashboard",
    "description": "Challenge 8 of edX Boot Camp (Front End) to create a Weather Dashboard.",
    "image": proj5,
    "githubUrl": "https://github.com/timsbootcamp/server-side-api-weather-dashboard",
    "deployedUrl": "https://timsbootcamp.github.io/server-side-api-weather-dashboard/"
  },
  {
    "id": "5",
    "title": "Meow Finder - Group Project",
    "description": "Project 1 of edX Boot Camp (Front End) course to create an Interactive Front-End Application.",
    "image": proj6,
    "githubUrl": "https://github.com/timsbootcamp/meow-finder",
    "deployedUrl": "https://timsbootcamp.github.io/meow-finder/"
  } 
]

const Projects = () => {
  return (
    <div className="container project-gallery">
      <br/>
      <h2 className="text-center">My List of Projects</h2>
      <br/><br/>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {projectData.map((project) => (
          <div key={project.id} className="col mb-4">
                <div className="card-body">
                  <h4 className="card-title">{project.title}</h4>
                  <br/>
                </div>

            <Link to={`/projects/${project.id}`}>
              <div className="card h-100 border-0">
              <img src={project.image} alt={project.title} className="card-img-top" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;