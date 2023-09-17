import React from 'react';

import { ReactComponent as Image } from '../../assets/signIn.svg';
import MainWrapper from '../../components/main-wrapper';
import SignInForm from '../../components/sign-in-form';

const SignInPage = () => {
	return (
		<MainWrapper>
			<div className="container p-16 mx-auto flex flex-wrap">
				<div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 text-center pt-5">
					<Image />
				</div>
				<SignInForm className="" />
			</div>
		</MainWrapper>
	);
};

export default SignInPage;
