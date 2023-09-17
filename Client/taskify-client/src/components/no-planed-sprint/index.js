import React from 'react';
import { ReactComponent as Image } from '../../assets/plan.svg';

const NoPlanedSprint = () => {
	return (
		<div className="w-full ml-4">
		  <div className="flex p-8 sm:flex-row flex-col">
			<div className="w-64 h-64 lg:mr-16 mr-4 flex-shrink-0">
			  <Image
				src="your-image-source.jpg" 
				className="w-full h-full"   
				alt="Image description"
			  />
			</div>
			<div className="flex-grow text-left m-10">
			  <h6 className="text-gray-900 text-lg title-font font-medium mb-3">Sprintinizi planlayın</h6>
			  <p className="leading-relaxed text-base">
				Çalışma ekibi olarak, tamamlanması gereken işleri belirleyin ve bu görevleri sprint'e sürükleyin.
			  </p>
			</div>
		  </div>
		</div>
	  );
	  
};

export default NoPlanedSprint;
