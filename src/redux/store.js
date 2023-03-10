import { configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import { contactsReducer } from './contacts/slice';
import { filterReducer } from './filter/slice';
import { persistedAuthReducer } from './auth/slice';

const middleware = getDefaultMiddleware =>
	getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	});

export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		filter: filterReducer,
		auth: persistedAuthReducer,
	},
	middleware,
});

export const persistor = persistStore(store);
