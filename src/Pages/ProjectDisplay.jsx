import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import '../styles/ProjectDisplay.css' ;


 function ProjectDisplay() {
  const {id} = useParams();
  const project = ProjectList[id];
  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <img src={project.image} alt='img'/>
      <p>
        <b>skills:</b> {project.skills}
      </p>
      
    <a href={project.githublink} target="_blank" rel="noop noreferrer"><GitHubIcon /></a> 
   <a href={project.hostedlink} target="_blank" rel="noop noreferrer"><OpenInNewIcon /></a>
    </div>
  )
}

export default ProjectDisplay;
