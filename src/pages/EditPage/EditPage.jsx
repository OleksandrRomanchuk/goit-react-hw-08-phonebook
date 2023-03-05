import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectGroups,
	selectFilter,
	selectCurrentContact,
} from 'redux/selectors';
import { useParams, useNavigate } from 'react-router-dom';
import { editContact } from 'redux/operations';
import { socialLinksCheck } from 'helpers/socialLinksCheck';
import { fetchContactById } from 'redux/operations';

import {
	EditForm,
	PositioningWrapperMain,
	PositioningGruopWrapper,
	Label,
	GroupLabel,
	GroupInput,
	Input,
	GroupSelect,
	GroupSpan,
	SubmitBtn,
} from 'components/ContactForm/ContactForm.styled';

const EditPage = () => {
	const currentContact = useSelector(selectCurrentContact);
	const [formValues, setFormValues] = useState(null);
	const { id: itemId } = useParams();
	const filter = useSelector(selectFilter);
	const myGroups = useSelector(selectGroups);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		const checkedContact = socialLinksCheck(currentContact);

		setFormValues(checkedContact);
	}, [currentContact]);

	useEffect(() => {
		dispatch(fetchContactById(itemId));
	}, [dispatch, itemId]);

	if (!currentContact) return;

	const handleInputChange = ({ target: { name, value } }) => {
		switch (name) {
			case 'contactsGroupList':
				return (
					formValues['group'] !== '---' &&
					setFormValues(prevState => ({ ...prevState, group: value }))
				);
			case 'linkedin':
				return setFormValues(prevState => ({
					...prevState,
					socialLinks: { ...prevState.socialLinks, [name]: value },
				}));
			case 'facebook':
				return setFormValues(prevState => ({
					...prevState,
					socialLinks: { ...prevState.socialLinks, [name]: value },
				}));
			case 'telegram':
				return setFormValues(prevState => ({
					...prevState,
					socialLinks: { ...prevState.socialLinks, [name]: value },
				}));

			default:
				return setFormValues(prevState => ({ ...prevState, [name]: value }));
		}
	};

	const onFormSubmit = async event => {
		try {
			event.preventDefault();

			const editedContact = { ...formValues };

			if (!editedContact.group) editedContact.group = '---';

			const { payload } = await dispatch(editContact(editedContact));

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
								name="phoneNumber"
								pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
								title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
								value={formValues.phoneNumber}
								placeholder="+380 ....."
								required
							/>
						</Label>
						<Label>
							Email:
							<Input
								onChange={handleInputChange}
								type="email"
								name="email"
								value={formValues.email}
								placeholder="some_body@....."
							/>
						</Label>
					</PositioningWrapperMain>
					<PositioningWrapperMain>
						<Label>
							Linkedin:
							<Input
								onChange={handleInputChange}
								type="url"
								name="linkedin"
								value={formValues.socialLinks.linkedin}
								placeholder="https://www.linkedin.com/in/....."
							/>
						</Label>
						<Label>
							Facebook:
							<Input
								onChange={handleInputChange}
								type="url"
								name="facebook"
								value={formValues.socialLinks.facebook}
								placeholder="https://www.facebook.com/....."
							/>
						</Label>
						<Label>
							Telegram:
							<Input
								onChange={handleInputChange}
								type="url"
								name="telegram"
								value={formValues.socialLinks.telegram}
								placeholder="https://t.me/....."
							/>
						</Label>
					</PositioningWrapperMain>
					<PositioningGruopWrapper>
						<GroupLabel>
							Enter new group name:
							<GroupInput
								onChange={handleInputChange}
								type="text"
								name="group"
								value={formValues.group}
								placeholder=""
							/>
						</GroupLabel>
						<GroupSpan>or</GroupSpan>
						<GroupLabel>
							choose from the list:
							<GroupSelect
								onChange={handleInputChange}
								name="contactsGroupList"
								disabled={formValues.group && formValues.group !== '---' ? true : false}
							>
								{myGroups.map(group => (
									<option key={group} value={group}>
										{group}
									</option>
								))}
							</GroupSelect>
						</GroupLabel>
					</PositioningGruopWrapper>
					<SubmitBtn type="submit">Save changes</SubmitBtn>
				</EditForm>
			)}
		</>
	);
};

export default EditPage;
