import React, { FC, useContext } from 'react';

import { AppContext } from '../lib/context';
import { Project as IProject } from '../lib/models';
import CreateProjectForm from './CreateProjectForm';
import Project from './Project';

const ProjectsContainer: FC = () => {
  const { projects } = useContext(AppContext);

  const projectElements = projects.map((project: IProject) => (
    <Project key={project.id} {...project} />
  ));

  return (
    <section>
      <CreateProjectForm />
      {projectElements}
    </section>
  );
};

export default ProjectsContainer;
