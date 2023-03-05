import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { groupFilterReducer } from './groupFilterSlice';

export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		filter: filterReducer,
		groupFilter: groupFilterReducer,
	},
});
