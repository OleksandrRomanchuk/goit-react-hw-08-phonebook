//========== helpers ==========
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

//========== components ==========
import { TiUserDeleteOutline } from 'react-icons/ti';

//========== actions ==========
import { deleteContact } from 'redux/contactsSlice';

//========== styles ==========
import {
	ContactWrapper,
	ContactName,
	PhoneNumber,
	DeleteBtn,
} from './ContactItem.styled';

export const ContactItem = ({
	contact: { contactName, contactPhoneNumber, id },
	...allyProps
}) => {
	const dispatch = useDispatch();

	return (
		<>
			<ContactWrapper>
				<ContactName>{contactName}</ContactName>
				<PhoneNumber>{contactPhoneNumber}</PhoneNumber>
			</ContactWrapper>
			<DeleteBtn
				type="button"
				onClick={() => dispatch(deleteContact(id))}
				title="Delete contact"
				{...allyProps}
			>
				<TiUserDeleteOutline />
			</DeleteBtn>
		</>
	);
};

ContactItem.propTypes = {
	contact: PropTypes.shape({
		contactName: PropTypes.string.isRequired,
		contactPhoneNumber: PropTypes.string.isRequired,
	}),
};
