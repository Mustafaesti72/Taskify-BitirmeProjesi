import React, { useContext } from 'react';
import NavLink from '../nav-link';
import { ProjectsContext } from '../../providers/projects-context.provider';
import { ReactComponent as Image } from '../../assets/hero.svg';

const NoActiveSprint = () => {
	const { currentProject } = useContext(ProjectsContext);

	return (
		<div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
			<Image className="lg:w-2/6 md:w-3/6 w-3/6 mb-10 object-cover object-center rounded" alt="hero" />
			<div className="text-center lg:w-2/3 w-full">
				<h4 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
					Aktif Sprint bulunmamakta
				</h4>
				<p className="mb-8 leading-relaxed">
					Sprint'i başlat{' '}
					<NavLink to={`/user/dashboard/${currentProject.id}/backlog`} textColor="green-400">
						<span className="text-lg">Bekleyen İşler Listesi</span>
					</NavLink>
				</p>
			</div>
		</div>
	);
};

export default NoActiveSprint;
