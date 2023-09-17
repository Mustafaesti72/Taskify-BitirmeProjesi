import { getValidationResult } from './index';

const USER = {
	USERNAME_MIN_LENGTH: 6,
	USERNAME_MAX_LENGTH: 25,
	NAME_MIN_LENGTH: 2,
	NAME_MAX_LENGTH: 12,
	PASSWORD_MIN_LENGTH: 6,
	EMAIL_PATTERN: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};
const ERROR_MESSAGES = {
	USER: {
	  USERNAME: `Kullanıcı adı ${USER.USERNAME_MIN_LENGTH}
	   ile ${USER.USERNAME_MAX_LENGTH} karakter arasında olmalıdır.`,
	  USERNAME_REQUIRED: 'Kullanıcı adı gereklidir.',
	  NAME: `Soyad ${USER.NAME_MIN_LENGTH} ile ${USER.NAME_MAX_LENGTH} karakter arasında olmalıdır.`,
	  NAME_REQUIRED: 'Ad gereklidir.',
	  PASSWORD_REQUIRED: 'Parola gereklidir.',
	  PASSWORD_LENGTH: `Parola en az ${USER.PASSWORD_MIN_LENGTH} karakter uzunluğunda olmalıdır.`,
	  PASSWORDS_NOT_MATCH: 'Parolalar uyuşmuyor.',
	  CONFIRM_PASSWORD_REQUIRED: 'Parola onayı gereklidir.',
	  EMAIL: 'Geçersiz e posta',
	  EMAIL_REQUIRED: 'E posta gereklidir.'
	}
  };
export const validateUsername = ({ username }) => {
	if (!username) {
		return getValidationResult(false, ERROR_MESSAGES.USER.USERNAME_REQUIRED);
	}

	const isValid = username.length >= USER.USERNAME_MIN_LENGTH && username.length <= USER.USERNAME_MAX_LENGTH;
	return getValidationResult(isValid, ERROR_MESSAGES.USER.USERNAME);
};

export const validateEmail = ({ email }) => {
	if (!email) {
		return getValidationResult(false, ERROR_MESSAGES.USER.EMAIL_REQUIRED);
	}
	const isValid = !!email.match(USER.EMAIL_PATTERN);
	return getValidationResult(isValid, ERROR_MESSAGES.USER.EMAIL);
};

export const validatePassword = ({ password }) => {
	if (!password) {
		return getValidationResult(false, ERROR_MESSAGES.USER.PASSWORD_REQUIRED);
	}
	const isValid = password.length >= USER.PASSWORD_MIN_LENGTH;
	return getValidationResult(isValid, ERROR_MESSAGES.USER.PASSWORD_LENGTH);
};

export const validateConfirmPassword = ({ password, confirmPassword }) => {
	if (!confirmPassword) {
		return getValidationResult(false, ERROR_MESSAGES.USER.CONFIRM_PASSWORD_REQUIRED);
	}

	const isValid = !password ? false : password === confirmPassword;
	return getValidationResult(isValid, ERROR_MESSAGES.USER.PASSWORDS_NOT_MATCH);
};
export const validateFirstName = ({ firstName }) => validateName(firstName);
export const validateLastName = ({ lastName }) => validateName(lastName);

const validateName = (name) => {
	if (!name) {
		return getValidationResult(false, ERROR_MESSAGES.USER.NAME_REQUIRED);
	}
	const isValid = name.length >= USER.NAME_MIN_LENGTH && name.length <= USER.NAME_MAX_LENGTH;
	return getValidationResult(isValid, ERROR_MESSAGES.USER.NAME);
};
