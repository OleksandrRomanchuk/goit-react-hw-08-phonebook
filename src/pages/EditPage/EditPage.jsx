import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentContact } from 'redux/contacts/contactSelectors';
import { selectFilter } from 'redux/filter/filterSelectors';
import { useParams, useNavigate } from 'react-router-dom';
import { editContact } from 'redux/contacts/contactsOperations';
import { fetchContactById } from 'redux/contacts/contactsOperations';

import {
	EditForm,
	PositioningWrapperMain,
	Label,
	Input,
	SubmitBtn,
} from 'shared/components/ContactForm/ContactForm.styled';

const EditPage = () => {
	const currentContact = useSelector(selectCurrentContact);
	const [formValues, setFormValues] = useState(null);
	const { id: itemId } = useParams();
	const filter = useSelector(selectFilter);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		setFormValues(currentContact);
	}, [currentContact]);

	useEffect(() => {
		dispatch(fetchContactById(itemId));
	}, [dispatch, itemId]);

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
			{formValues && !filter && (
				<EditForm onSubmit={onFormSubmit}>
					<PositioningWrapperMain>
						<Label>
							Name:
							<Input
								onChange={handleInputChange}
								type="text"
								name="name"
								pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
								title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
								value={formValues.name}
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
								value={formValues.number}
								placeholder="+380 ....."
								required
							/>
						</Label>
					</PositioningWrapperMain>
					<SubmitBtn type="submit">Save changes</SubmitBtn>
				</EditForm>
			)}
		</>
	);
};

export default EditPage;
