import React from 'react';

import { ReactComponent as HeroImage } from '../../assets/2080808_270191-P5GXOV-773.svg';
import NavLink from '../nav-link';
import FormButton from '../button-form';

const HomeHero = () => {
	return (
		<div className="container mx-auto flex lg:py-20 py-10 md:flex-row flex-col items-center px-16 ">
			<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
				<h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-gray-900">
					Taskify
					<br className="hidden lg:inline-block" />Projelerinizi Yönetmek Artık Daha Kolay
				</h1>
				<p className="mb-8 leading-relaxed">
				Taskify ile projelerinizi düzenlemek, takip etmek ve ekiplerinizle işbirliği yapmak artık daha hızlı ve etkili. İhtiyacınıza özel esneklik ve kullanıcı dostu arayüz sayesinde, projelerinizin kontrolünü elinizde tutun ve başarıya ulaşmak için daha güçlü bir şekilde yönlendirin. 
				</p>
				<div className="flex items-center flex-wrap">
					<NavLink to="/signup">
						<FormButton>Hemen Dene!</FormButton>
					</NavLink>
				</div>
			</div>
			<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
				<HeroImage className="object-cover object-center rounded" alt="hero" />
			</div>
		</div>
	);
};

export default HomeHero;
