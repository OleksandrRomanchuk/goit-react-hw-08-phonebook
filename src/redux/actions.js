import { nanoid } from 'nanoid';

export const addContact = contact => {
	contact.id = nanoid(8);

	return {
		type: 'contacts/addContact',
		payload: contact,
	};
};

export const delContact = id => {
	return {
		type: 'contacts/delContact',
		payload: id,
	};
};

export const setFilter = str => {
	return {
		type: 'filter/setFilter',
		payload: str,
	};
};
