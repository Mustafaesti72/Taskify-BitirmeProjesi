import React from 'react';
import { AllProjectsContainer, PageContainer, ProjectCardContainer } from './index.styles';

import InfoMessageContainer from '../form-input-info-message';
import MainWrapper from '../main-wrapper';
import FormButton from '../button-form';
import NavLink from '../nav-link';
import ProjectCard from '../project-card';
import PageTopicContainer from '../page-topic-container';

const ProjectsAll = ({ projects }) => {
	return (
		<MainWrapper otherClasses="pb-24">
			<PageContainer>
				<PageTopicContainer size="lg:w-2/3" title="Projeler" bottom="mb-5">
					<NavLink to="/user/projects/create">
						<FormButton>Oluştur</FormButton>
					</NavLink>
				</PageTopicContainer>
				<InfoMessageContainer addClass="lg:w-2/3 flex mt-8 flex-col  mx-auto">
					Projeye giriş için ismine tıklayın
				</InfoMessageContainer>
				<AllProjectsContainer>
					<ProjectCardContainer>
						{projects.map((project) => <ProjectCard key={project.id} initialData={project} />)}
					</ProjectCardContainer>
				</AllProjectsContainer>
			</PageContainer>
		</MainWrapper>
	);
};

export default ProjectsAll;
