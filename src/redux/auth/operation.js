import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, refreshUser } from 'shared/api/authAPI';
import { contactsAxiosDefaults } from 'shared/api/APIDefaults';

const token = {
	setToken(token) {
		contactsAxiosDefaults.defaults.headers.common.Authorization = `Bearer ${token}`;
	},

	unsetToken() {
		contactsAxiosDefaults.defaults.headers.common.Authorization = ``;
	},
};

const authRegister = createAsyncThunk(
	'auth/registerUser',
	async (credentials, { rejectWithValue }) => {
		try {
			const { data } = await signUp(credentials);

			token.setToken(data.token);

			return data;
		} catch (error) {
			alert(error.message);
			return rejectWithValue(error.message);
		}
	}
);

const authLogin = createAsyncThunk(
	'auth/loginUser',
	async (credentials, { rejectWithValue }) => {
		try {
			const { data } = await logIn(credentials);

			token.setToken(data.token);

			return data;
		} catch (error) {
			alert(error.message);
			return rejectWithValue(error.message);
		}
	}
);

const authLogout = createAsyncThunk(
	'auth/logoutUser',
	async (_, { rejectWithValue }) => {
		try {
			await logOut();
			token.unsetToken();
		} catch (error) {
			alert(error.message);
			return rejectWithValue(error.message);
		}
	}
);

const authRefreshUser = createAsyncThunk(
	'auth/refreshUser',
	async (_, { rejectWithValue, getState }) => {
		try {
			const state = getState();
			const tokenFromLS = state.auth.token;

			token.setToken(tokenFromLS);

			const { data } = await refreshUser();

			return data;
		} catch (error) {
			alert(error.message);
			return rejectWithValue(error.message);
		}
	},
	{
		condition: (_, { getState }) => {
			const state = getState();
			const tokenFromLS = state.auth.token;

			if (tokenFromLS === '') {
				return false;
			}
		},
	}
);

export { authRegister, authLogin, authLogout, authRefreshUser };
