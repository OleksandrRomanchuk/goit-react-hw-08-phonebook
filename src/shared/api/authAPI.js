import { contactsAxiosDefaults } from './APIDefaults';

const signUp = credentials => {
	return contactsAxiosDefaults.post('/users/signup', credentials);
};

const logIn = credentials => {
	return contactsAxiosDefaults.post('/users/login', credentials);
};

const logOut = () => {
	return contactsAxiosDefaults.post('/users/logout');
};

const refreshUser = () => {
	return contactsAxiosDefaults.get('/users/current');
};

export { signUp, logIn, logOut, refreshUser };
