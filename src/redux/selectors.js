import { createSelector } from '@reduxjs/toolkit';

const selectContacts = state => state.contacts;

const selectCurrentContact = state => state.contacts.currentContact;

const selectFilter = state => state.filter;

const selectIsLoading = state => state.contacts.isLoading;

const selectError = state => state.contacts.error;

const selectGroupFilter = state => state.groupFilter;

const selectFilteredContacts = state => {
	const contacts = selectContacts(state);
	const filter = selectFilter(state);

	const filteredContacts = contacts.items.filter(({ name }) =>
		name.toLowerCase().includes(filter)
	);

	return { ...state, contacts: { ...contacts, items: filteredContacts } };
};

const selectGroups = createSelector([selectContacts], ({ items }) => {
	const valuesOfProperties = items
		.map(({ group }) => group)
		.filter((item, ind, arr) => ind === arr.indexOf(item))
		.sort((a, b) => a.localeCompare(b));

	valuesOfProperties.unshift('All');

	return valuesOfProperties;
});

export {
	selectContacts,
	selectCurrentContact,
	selectFilter,
	selectIsLoading,
	selectError,
	selectGroupFilter,
	selectFilteredContacts,
	selectGroups,
};
