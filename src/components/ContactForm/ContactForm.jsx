//========== helpers ==========
import { initValues } from 'initials/initFormValues';

//========== form libraries ==========
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//========== selectors ==========
import { getContacts } from 'redux/selectors';

//========== actions ==========
import { addContact } from 'redux/actions';

//========== components ==========
import { TiUserAddOutline } from 'react-icons/ti';

//========== styles ==========
import { Form, Label, Input, SubmitBtn } from './ContactForm.styled';

export const ContactForm = () => {
	const [state, setState] = useState({ ...initValues });
	const contacts = useSelector(getContacts);
	const dispatch = useDispatch();

	const handleInputChange = ({ target: { name, value } }) => {
		setState(prevState => ({ ...prevState, [name]: value }));
	};

	const onFormSubmit = event => {
		event.preventDefault();

		const result = contacts.some(({ name }) => name === state.name);

		if (!result) {
			dispatch(addContact(state));
			setState({ ...initValues });
		}
	};

	const { name, number } = state;

	return (
		<Form onSubmit={onFormSubmit}>
			<Label>
				Name
				<Input
					onChange={handleInputChange}
					type="text"
					name="name"
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					value={name}
					required
				/>
			</Label>

			<Label>
				Number
				<Input
					onChange={handleInputChange}
					type="tel"
					name="number"
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					value={number}
					required
				/>
			</Label>
			<SubmitBtn type="submit">
				<TiUserAddOutline style={{ fontSize: 14 }} />
				Add contact
			</SubmitBtn>
		</Form>
	);
};
