import { getValidationResult } from './index';

const TEAM = {
	TITLE_MIN_LENGTH: 3,
	TITLE_MAX_LENGTH: 50
};
const ERROR_MESSAGES = {
	TEAM: {
	  TITLE: `Ekip başlığı ${TEAM.TITLE_MIN_LENGTH} ile ${TEAM.TITLE_MAX_LENGTH} karakter arasında olmalıdır`,
	  TITLE_REQUIRED: 'Ekip başlığı gereklidir'
	}
  };

export const validateTitle = ({ title }) => {
	if (!title) {
		return getValidationResult(false, ERROR_MESSAGES.TEAM.TITLE_REQUIRED);
	}

	const isValid = title.length >= TEAM.TITLE_MIN_LENGTH && title.length <= TEAM.TITLE_MAX_LENGTH;
	return getValidationResult(isValid, ERROR_MESSAGES.TEAM.TITLE);
};
