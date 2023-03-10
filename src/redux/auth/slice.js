import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
	authRegister,
	authLogin,
	authLogout,
	authRefreshUser,
} from './operation';

const persistConfig = {
	key: 'token(hw-08)',
	storage,
	whitelist: ['token'],
};

const handlePending = state => {
	state.isLoading = true;
	state.error = null;
};

const handleRejected = (state, { payload }) => {
	state.isLoading = false;
	state.error = payload;
};

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: { name: '', email: '' },
		token: '',
		isLoggedIn: false,
		isLoading: false,
		error: null,
	},
	extraReducers: builder => {
		builder
			.addCase(authRegister.pending, handlePending)
			.addCase(authLogin.pending, handlePending)
			.addCase(authLogout.pending, handlePending)
			.addCase(authRefreshUser.pending, handlePending)
			.addCase(authRegister.rejected, handleRejected)
			.addCase(authLogin.rejected, handleRejected)
			.addCase(authLogout.rejected, handleRejected)
			.addCase(authRefreshUser.rejected, handleRejected)
			.addCase(authRegister.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.user = payload.user;
				state.token = payload.token;
				state.isLoggedIn = true;
			})
			.addCase(authLogin.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.user = payload.user;
				state.token = payload.token;
				state.isLoggedIn = true;
			})
			.addCase(authLogout.fulfilled, state => {
				state.isLoading = false;
				state.error = null;
				state.user = { name: '', email: '' };
				state.token = '';
				state.isLoggedIn = false;
			})
			.addCase(authRefreshUser.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.error = null;
				state.user = payload;
				state.isLoggedIn = true;
			});
	},
});

export const persistedAuthReducer = persistReducer(
	persistConfig,
	authSlice.reducer
);
