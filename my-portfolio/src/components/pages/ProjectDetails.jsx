import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../../data/projects.json';

function ProjectDetails() {

  const { id } = useParams();
  const project = projectsData.find(project => project.id === id);

  if (!project) {
    return <div>Project not not found</div>;
  }

  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <p>{project.image}</p>  

      <img className="product-detail-image" src={project.image} alt={project.title} />
      <p>
        GitHub URL: <a href={project.githubUrl}>{project.githubUrl}</a>
        <br />
        Deployed URL: <a href={project.deployedUrl}>{project.deployedUrl}</a>
      </p>
    </div>
  );
}

export default ProjectDetails;
