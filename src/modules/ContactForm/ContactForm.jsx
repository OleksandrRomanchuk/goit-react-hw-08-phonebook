import PropTypes from 'prop-types';
import Button from '../../shared/components/Button/Button';
import FormField from 'shared/components/FormField/FormFeild';
import { useAddContactForm } from 'shared/hooks/useAddContactForm';
import { initialAddContactFormValues } from './initialAddContactFormValues';
import { useEffect } from 'react';
import { TiUserAddOutline } from 'react-icons/ti';
import { saveDataToLocalSt, newContactLSK } from 'shared/helpers/localStfunc';
import { fields } from './fields';

import { Form, PositioningWrapperMain } from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
	const { state, handleChange, onFormSubmit } = useAddContactForm(
		initialAddContactFormValues,
		onSubmit,
		newContactLSK
	);

	useEffect(() => {
		saveDataToLocalSt(newContactLSK, state);
	}, [state]);

	const { name, number } = state;

	return (
		<Form onSubmit={onFormSubmit}>
			<PositioningWrapperMain>
				<FormField
					handleChange={handleChange}
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					value={name}
					{...fields.name}
				/>
				<FormField
					handleChange={handleChange}
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					value={number}
					{...fields.number}
				/>
			</PositioningWrapperMain>
			<Button type="submit" text="Add contact" title="Add contact">
				<TiUserAddOutline style={{ fontSize: 18 }} />
			</Button>
		</Form>
	);
};

ContactForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
