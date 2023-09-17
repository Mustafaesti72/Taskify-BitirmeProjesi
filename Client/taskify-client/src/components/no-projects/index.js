import React from 'react';
import { ReactComponent as Image } from '../../assets/hero.svg';

import MainWrapper from '../main-wrapper';
import FormButton from '../button-form';
import NavLink from '../nav-link';

const NoProjects = () => {
	return (
		<MainWrapper>
			<div className="container mx-auto flex flex-col px-5 py-12 justify-center items-center">
				<Image className="lg:w-2/6 md:w-3/6 w-3/6 mb-10 object-cover object-center rounded" alt="hero" />
				<div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
					<h6 className="title-font sm:text-4xl text-3xl mb-4 font-small text-gray-900">
					Şu anda hiçbir projeniz bulunmuyor.
					</h6>
					<p className="mb-8 leading-relaxed">Bir tane oluşturun ve Taskify başlasın!</p>
					<div className="flex w-full justify-center">
						<NavLink to="/user/projects/create">
							<FormButton addClass="ml-4">Oluştur</FormButton>
						</NavLink>
					</div>
				</div>
			</div>
		</MainWrapper>
	);
};

export default NoProjects;
