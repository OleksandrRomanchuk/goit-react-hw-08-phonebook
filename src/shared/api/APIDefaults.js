import axios from 'axios';

const contactsAxiosDefaults = axios.create({
	baseURL: 'https://connections-api.herokuapp.com',
});

export { contactsAxiosDefaults };
