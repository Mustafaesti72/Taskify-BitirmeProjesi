import { getValidationResult } from './index';

const SPRINT = {
	TITLE_MIN_LENGTH: 3,
	TITLE_MAX_LENGTH: 25,
	GOAL_MIN_LENGTH: 2,
	GOAL_MAX_LENGTH: 500
};
const ERROR_MESSAGES = {
	SPRINT: {
	  TITLE: `Başlık ${SPRINT.TITLE_MIN_LENGTH}
	   ile ${SPRINT.TITLE_MAX_LENGTH} karakter arasında olmalıdır`,
	  TITLE_REQUIRED: 'Başlık gereklidir',
	  GOAL: `Hedef ${SPRINT.GOAL_MIN_LENGTH} ile ${SPRINT.GOAL_MAX_LENGTH} karakter arasında olmalıdır`,
	  END_DATE_REQUIRED: 'Bitiş tarihi gereklidir',
	  START_DATE_REQUIRED: 'Başlangıç tarihi gereklidir'
	}
  };

export const validateTitle = ({ title }) => {
	if (!title) {
		return getValidationResult(false, ERROR_MESSAGES.SPRINT.TITLE_REQUIRED);
	}

	const isValid = title.length >= SPRINT.TITLE_MIN_LENGTH && title.length <= SPRINT.TITLE_MAX_LENGTH;
	return getValidationResult(isValid, ERROR_MESSAGES.SPRINT.TITLE);
};

export const validateStartDate = ({ startDate }) => {
	if (!startDate) {
		return getValidationResult(false, ERROR_MESSAGES.SPRINT.START_DATE_REQUIRED);
	}

	return true;
};

export const validateEndDate = ({ endDate }) => {
	if (!endDate) {
		return getValidationResult(false, ERROR_MESSAGES.SPRINT.END_DATE_REQUIRED);
	}

	return true;
};

export const validateGoal = ({ goal }) => {
	if (!goal) {
		return true;
	}
	const isValid = goal.length >= SPRINT.GOAL_MIN_LENGTH && goal.length <= SPRINT.GOAL_MAX_LENGTH;
	return getValidationResult(isValid, ERROR_MESSAGES.SPRINT.GOAL);
};
