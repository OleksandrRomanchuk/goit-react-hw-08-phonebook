import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	getAllContacts,
	postNewContact,
	removeContact,
	putContact,
} from 'shared/api/contactsAPI';

const fetchContacts = createAsyncThunk(
	'contacts/fetchAll',
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await getAllContacts();

			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const addContact = createAsyncThunk(
	'contacts/addContact',
	async (contact, { rejectWithValue }) => {
		try {
			const { data } = await postNewContact(contact);

			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
	{
		condition: (contact, { getState }) => {
			const {
				contacts: { items },
			} = getState();

			const result = items.some(({ name }) => name === contact.name);

			return !result;
		},
	}
);

const deleteContact = createAsyncThunk(
	'contacts/deleteContact',
	async (id, { rejectWithValue }) => {
		try {
			const { data } = await removeContact(id);

			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const editContact = createAsyncThunk(
	'contacts/editContact',
	async (contact, { rejectWithValue }) => {
		try {
			const { data } = await putContact(contact);

			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
	{
		condition: (contact, { getState }) => {
			const {
				contacts: { items },
			} = getState();

			const result = items.some(
				({ name, id }) => name === contact.name && id !== contact.id
			);

			return !result;
		},
	}
);

export { fetchContacts, addContact, deleteContact, editContact };
