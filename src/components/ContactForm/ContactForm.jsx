import PropTypes from 'prop-types';
import { initialAddContactFormValues } from 'initials/initialAddContactFormValues';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { TiUserAddOutline } from 'react-icons/ti';
import {
	loadDataFromLocalSt,
	saveDataToLocalSt,
	localStorageFormValuesKey,
} from 'helpers/localStfunc';

import {
	Form,
	PositioningWrapperMain,
	Label,
	Input,
	SubmitBtn,
} from './ContactForm.styled';

const ContactForm = ({ toggleModal }) => {
	const [formValues, setFormValues] = useState(
		() =>
			loadDataFromLocalSt(localStorageFormValuesKey) ?? initialAddContactFormValues
	);
	const dispatch = useDispatch();

	useEffect(() => {
		saveDataToLocalSt(localStorageFormValuesKey, formValues);
	}, [formValues]);

	const handleInputChange = ({ target: { name, value } }) => {
		return setFormValues(prevState => ({ ...prevState, [name]: value }));
	};

	const onFormSubmit = async event => {
		try {
			event.preventDefault();

			const newContact = { ...formValues };

			if (!newContact.group) newContact.group = '---';

			const { payload } = await dispatch(addContact(newContact));

			if (payload) {
				toggleModal();
				saveDataToLocalSt(localStorageFormValuesKey, initialAddContactFormValues);
			} else {
				alert('Contact with such names is already in your phone book.');
			}
		} catch (error) {
			console.log(error);
		}
	};

	const { name, number } = formValues;

	return (
		<Form onSubmit={onFormSubmit}>
			<PositioningWrapperMain>
				<Label>
					Name:
					<Input
						onChange={handleInputChange}
						type="text"
						name="name"
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						value={name}
						placeholder="Gregor ....."
						required
					/>
				</Label>
				<Label>
					Phone number:
					<Input
						onChange={handleInputChange}
						type="tel"
						name="number"
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						value={number}
						placeholder="+380 ....."
						required
					/>
				</Label>
			</PositioningWrapperMain>
			<SubmitBtn type="submit">
				<TiUserAddOutline style={{ fontSize: 18 }} />
				Add contact
			</SubmitBtn>
		</Form>
	);
};

ContactForm.propTypes = {
	toggleModal: PropTypes.func.isRequired,
};

export default ContactForm;
