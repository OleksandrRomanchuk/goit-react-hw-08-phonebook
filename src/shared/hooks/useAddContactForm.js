import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	loadDataFromLocalSt,
	saveDataToLocalSt,
} from 'shared/helpers/localStfunc';

const useAddContactForm = (initialState, onSubmit, LS_KEY) => {
	const navigate = useNavigate();
	const [state, setState] = useState(
		() => loadDataFromLocalSt(LS_KEY) ?? { ...initialState }
	);

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setState(prevState => ({ ...prevState, [name]: value }));
	};

	const onFormSubmit = async event => {
		event.preventDefault();

		const result = await onSubmit({ ...state });

		if (result) {
			saveDataToLocalSt(LS_KEY, initialState);
			setState({ ...initialState });
			navigate('/my-contacts');
		} else {
			alert('Contact with such names is already in your phone book.');
		}
	};

	return { state, setState, handleChange, onFormSubmit };
};

export { useAddContactForm };
