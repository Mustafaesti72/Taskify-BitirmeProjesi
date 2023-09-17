import React from 'react';
import StepIconContainer from '../step-icon-container';
import StepTextContainer from '../step-text-container';

const StepsContainer = () => (
	<div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
		<div className="flex relative pb-12">
			<StepIconContainer name="account" bgColor="green-400" />
			<StepTextContainer title="HESAP">
			Hesap oluşturmak, başarılı proje yönetiminizin ilk adımıdır!
			</StepTextContainer>
		</div>
		<div className="flex relative pb-12">
			<StepIconContainer name="project" bgColor="green-400" />
			<StepTextContainer title="PROJE">Proje oluşturun. Taskify, onu yönetmenize yardımcı olacak!</StepTextContainer>
		</div>
		<div className="flex relative pb-12">
			<StepIconContainer name="team" bgColor="green-400" />
			<StepTextContainer title="TAKIM">
				Harika projeler harika takımlar gerektirir. Takım arkadaşlarınızı ekleyin, harika projeleri birlikte planlayın, izleyin ve oluşturun.
			</StepTextContainer>
		</div>
		<div className="flex relative pb-12">
			<StepIconContainer name="done" bgColor="green-400" />
			<StepTextContainer title="HAZIRSINIZ">
			Tebrikler! Şimdi takımınızın işini planlamaya başlayabilirsiniz.
			</StepTextContainer>
		</div>
		<div className="flex relative">
			<StepIconContainer name="enjoy" bgColor="green-400" />
			<StepTextContainer title="KEYFİNİ ÇIKARTIN">
			İşinizden keyif almamayı unutmayın! Taskify ile bunu yapmak kolay.
			</StepTextContainer>
		</div>
	</div>
);

export default StepsContainer;
