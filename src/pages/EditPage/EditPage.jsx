import FormField from 'shared/components/FormField/FormFeild';
import Button from 'shared/components/Button/Button';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentContact } from 'redux/contacts/selectors';
import { useNavigate } from 'react-router-dom';
import { editContact } from 'redux/contacts/operations';
import { fields } from './fields';

import {
	EditForm,
	PositioningWrapperMain,
} from 'modules/ContactForm/ContactForm.styled';

const EditPage = () => {
	const currentContact = useSelector(selectCurrentContact);
	const [formValues, setFormValues] = useState(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		setFormValues(currentContact);
	}, [currentContact]);

	if (!currentContact) return;

	const handleInputChange = ({ target: { name, value } }) => {
		return setFormValues(prevState => ({ ...prevState, [name]: value }));
	};

	const onFormSubmit = async event => {
		try {
			event.preventDefault();

			const { payload } = await dispatch(editContact(formValues));

			if (payload) {
				navigate('/my-contacts');
			} else {
				alert('Contact with such names is already in your phone book.');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{formValues && (
				<EditForm onSubmit={onFormSubmit}>
					<PositioningWrapperMain>
						<FormField
							handleChange={handleInputChange}
							pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
							value={formValues.name}
							{...fields.name}
						/>
						<FormField
							handleChange={handleInputChange}
							pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
							value={formValues.number}
							{...fields.number}
						/>
					</PositioningWrapperMain>
					<Button type="submit" text="Save changes" title="Save changes" />
				</EditForm>
			)}
		</>
	);
};

export default EditPage;
