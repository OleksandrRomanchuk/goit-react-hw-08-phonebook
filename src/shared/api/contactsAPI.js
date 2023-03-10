import { contactsAxiosDefaults } from './APIDefaults';

const getAllContacts = () => {
	return contactsAxiosDefaults.get('/contacts');
};

const postNewContact = contact => {
	return contactsAxiosDefaults.post('/contacts', contact);
};

const removeContact = id => {
	return contactsAxiosDefaults.delete(`/contacts/${id}`);
};

const putContact = contact => {
	const valuesToUpdate = {
		name: contact.name,
		number: contact.number,
	};
	return contactsAxiosDefaults.patch(`/contacts/${contact.id}`, valuesToUpdate);
};

export { getAllContacts, postNewContact, removeContact, putContact };
