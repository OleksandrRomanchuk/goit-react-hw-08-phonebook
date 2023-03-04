import PropTypes from 'prop-types';
import { initialAddContactFormValues } from 'initials/initialAddContactFormValues';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGroups } from 'redux/selectors';
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
	PositioningGruopWrapper,
	Label,
	GroupLabel,
	GroupInput,
	Input,
	GroupSelect,
	GroupSpan,
	SubmitBtn,
} from './ContactForm.styled';

const ContactForm = ({ toggleModal }) => {
	const [formValues, setFormValues] = useState(
		() =>
			loadDataFromLocalSt(localStorageFormValuesKey) ?? initialAddContactFormValues
	);
	const dispatch = useDispatch();
	const myGroups = useSelector(selectGroups);

	useEffect(() => {
		saveDataToLocalSt(localStorageFormValuesKey, formValues);
	}, [formValues]);

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

	const {
		name,
		phoneNumber,
		group,
		email,
		socialLinks: { linkedin = '', facebook = '', telegram = '' },
	} = formValues;

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
						name="phoneNumber"
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						value={phoneNumber}
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
						value={email}
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
						value={linkedin}
						placeholder="https://www.linkedin.com/in/....."
					/>
				</Label>
				<Label>
					Facebook:
					<Input
						onChange={handleInputChange}
						type="url"
						name="facebook"
						value={facebook}
						placeholder="https://www.facebook.com/....."
					/>
				</Label>
				<Label>
					Telegram:
					<Input
						onChange={handleInputChange}
						type="url"
						name="telegram"
						value={telegram}
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
						value={group}
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
