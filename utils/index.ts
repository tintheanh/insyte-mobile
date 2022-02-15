import isIOS from './helpers/is_ios';
import useKeyboard from './hooks/useKeyboard';
import authRepo from './repo/auth_repo';
import alertErrorToast from './helpers/alert_error_toast';
import validateEmail from './validations/validate_email';
import validatePassword from './validations/validate_password';
import saveDataInStorage from './helpers/save_data_in_storage';
import getDataFromStorage from './helpers/get_data_from_storage';
import removeDataFromStorage from './helpers/remove_data_from_storage';
import toError from './helpers/to_error';

export {
	isIOS,
	useKeyboard,
	authRepo,
	alertErrorToast,
	validateEmail,
	validatePassword,
	saveDataInStorage,
	getDataFromStorage,
	removeDataFromStorage,
	toError,
};
