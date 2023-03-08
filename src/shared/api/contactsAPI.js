import axios from 'axios';

const contactsAxiosDefaults = axios.create({
	baseURL: 'https://63fc83688ef914c55599030a.mockapi.io/api/contacts',
});

const getAllContacts = () => {
	return contactsAxiosDefaults.get('/');
};

const getContactById = id => {
	return contactsAxiosDefaults.get(`/${id}`);
};

const postNewContact = contact => {
	return contactsAxiosDefaults.post('/', contact);
};

const removeContact = id => {
	return contactsAxiosDefaults.delete(`/${id}`);
};

const putContact = contact => {
	return contactsAxiosDefaults.put(`/${contact.id}`, contact);
};

const signUp = contact => {
	return contactsAxiosDefaults.post('/users/signup', contact);
};

const logIn = contact => {
	return contactsAxiosDefaults.post('/users/login', contact);
};

const logOut = () => {
	return contactsAxiosDefaults.post('/users/logout');
};

const refreshUser = () => {
	return contactsAxiosDefaults.get('/users/current');
};

export {
	getAllContacts,
	getContactById,
	postNewContact,
	removeContact,
	putContact,
	signUp,
	logIn,
	logOut,
	refreshUser,
};
