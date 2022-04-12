import React, { FC } from 'react';

import { useProjects } from '../lib/useProjects';
import Project from './Project';

interface ProjectsContainerProps {
  a?: string;
}

const ProjectsContainer: FC<ProjectsContainerProps> = () => {
  //   const { loading, error, data: projectsData } = useProjects();
  const { data: projectsData } = useProjects();
  console.log(projectsData);

  const projectElements = projectsData.map((project) => (
    <Project key={project.id} {...project} />
  ));

  return <section>{projectElements}</section>;
};

export default ProjectsContainer;
