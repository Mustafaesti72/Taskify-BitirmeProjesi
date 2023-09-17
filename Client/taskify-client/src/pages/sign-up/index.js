import React, { useEffect } from 'react';

import Image from '../../assets/sign-up.png'

import MainWrapper from '../../components/main-wrapper';
import SignUpForm from '../../components/sign-up-form';

const SignUpPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<MainWrapper className="ml-64">
		<div className="container p-16 mx-auto flex flex-wrap justify-center items-center">
		  <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 text-center">
			<img src={Image} alt="Sign up" style={{ width: '400px', height: 'auto' , marginRight: '72px', marginBottom: '72px'}} />
		  </div>
		  <SignUpForm />
		</div>
	  </MainWrapper>
	);
};

export default SignUpPage;
