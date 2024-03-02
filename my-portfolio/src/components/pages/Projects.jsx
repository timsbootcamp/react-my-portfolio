import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../../data/projects.json';

const Projects = () => {
  return (
    <div className="container project-gallery">
      <h2 className="text-center">Project Gallery</h2>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {projectData.map((project) => (
          <div key={project.id} className="col mb-4">
            <Link to={`/project/${project.id}`} className="text-decoration-none">
              <div className="card h-100 border-0">
                <img src={project.image} alt={project.title} className="card-img-top" />
                <div className="card-body">
                  <h3 className="card-title">{project.title}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
