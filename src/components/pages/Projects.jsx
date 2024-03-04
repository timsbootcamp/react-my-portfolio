import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../../data/projects.json';


const Projects = () => {
  return (
    <div className="container project-gallery">
      <br/>
      <h3 className="text-center">My List of Projects</h3>
      <br/><br/>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {projectData.map((project) => (
          <div key={project.id} className="col mb-4">           
                <div className="card-body ">
                  <h5 className="card-title bold ">{project.title}</h5>
                  <br/>
                </div>

            <Link to={`/projects/${project.id}`}>
              <div className="card h-100 border-0 ">
                <br/>
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