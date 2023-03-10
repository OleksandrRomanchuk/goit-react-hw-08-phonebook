import { selectFilter } from 'redux/filter/selectors';

const selectContacts = state => state.contacts;

const selectCurrentContact = state => state.contacts.currentContact;

const selectIsLoading = state => state.contacts.isLoading;

const selectError = state => state.contacts.error;

const selectFilteredContacts = state => {
	const contacts = selectContacts(state);
	const filter = selectFilter(state);

	const filteredContacts = contacts.items.filter(({ name }) =>
		name.toLowerCase().includes(filter)
	);

	return { ...state, contacts: { ...contacts, items: filteredContacts } };
};

export {
	selectContacts,
	selectCurrentContact,
	selectIsLoading,
	selectError,
	selectFilteredContacts,
};
