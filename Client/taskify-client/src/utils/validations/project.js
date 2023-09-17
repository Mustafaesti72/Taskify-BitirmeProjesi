import { getValidationResult } from './index';

const PROJECT = {
	KEY_MIN_LENGTH: 2,
	KEY_MAX_LENGTH: 10,
	NAME_MIN_LENGTH: 6,
	NAME_MAX_LENGTH: 80
};
const ERROR_MESSAGES = {
	PROJECT: {
	  KEY: `Anahtar ${PROJECT.KEY_MIN_LENGTH}
	   ile ${PROJECT.KEY_MAX_LENGTH} karakter arasında olmalıdır`,
	  KEY_REQUIRED: 'Anahtar gereklidir',
	  NAME: `Proje Adı ${PROJECT.NAME_MIN_LENGTH} ile ${PROJECT.NAME_MAX_LENGTH} karakter arasında olmalıdır`,
	  NAME_REQUIRED: 'Proje Adı gereklidir'
	}
  };

export const validateName = ({ name }) => {
	if (!name) {
		return getValidationResult(false, ERROR_MESSAGES.PROJECT.NAME_REQUIRED);
	}

	const isValid = name.length >= PROJECT.NAME_MIN_LENGTH && name.length <= PROJECT.NAME_MAX_LENGTH;
	return getValidationResult(isValid, ERROR_MESSAGES.PROJECT.NAME);
};

export const validateKey = ({ key }) => {
	if (!key) {
		return getValidationResult(false, ERROR_MESSAGES.PROJECT.KEY_REQUIRED);
	}

	const isValid = key.length >= PROJECT.KEY_MIN_LENGTH && key.length <= PROJECT.KEY_MAX_LENGTH;
	return getValidationResult(isValid, ERROR_MESSAGES.PROJECT.KEY);
};
