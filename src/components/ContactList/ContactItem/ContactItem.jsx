//========== helpers ==========
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

//========== components ==========
import { TiUserDeleteOutline } from 'react-icons/ti';

import { delContact } from 'redux/actions';

//========== styles ==========
import {
	ContactWrapper,
	ContactName,
	PhoneNumber,
	DeleteBtn,
} from './ContactItem.styled';

export const ContactItem = ({
	contact: { name, number, id },
	...allyProps
}) => {
	const dispatch = useDispatch();
	
	return (
		<>
			<ContactWrapper>
				<ContactName>{name}</ContactName>
				<PhoneNumber>{number}</PhoneNumber>
			</ContactWrapper>
			<DeleteBtn
				type="button"
				onClick={() => dispatch(delContact(id))}
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
		name: PropTypes.string.isRequired,
		number: PropTypes.string.isRequired,
	}),
};
