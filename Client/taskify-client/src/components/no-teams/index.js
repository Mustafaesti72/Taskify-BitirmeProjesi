import React from 'react';

import NavLink from '../nav-link';
import { ReactComponent as Image } from '../../assets/hero.svg';

const NoTeams = () => {
	return (
		<div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
			<Image className="lg:w-2/6 md:w-3/6 w-3/6 mb-10 object-cover object-center rounded" alt="hero" />
			<div className="text-center lg:w-2/3 w-full">
				<h4 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
				Bu proje üzerinde çalışan hiçbir takım yok.
				</h4>
				<p className="mb-8 leading-relaxed">
					Takım {' '}
					<NavLink to={'/user/team/create'} textColor="custom">
						<span className="text-lg">Oluşturun</span>
					</NavLink>
				</p>
			</div>
		</div>
	);
};

export default NoTeams;
