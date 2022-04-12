import React, { FC } from 'react';

import { useProjects } from '../lib/useProjects';

interface ProjectsContainerProps {
  a?: string;
}

const ProjectsContainer: FC<ProjectsContainerProps> = () => {
  //   const { loading, error, data } = useProjects();
  const { data } = useProjects();
  console.log(data);

  return <section>ProjectsContainer</section>;
};

export default ProjectsContainer;
