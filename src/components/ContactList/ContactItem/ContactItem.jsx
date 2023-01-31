//========== helpers ==========
import PropTypes from 'prop-types';

//========== components ==========
import { TiUserDeleteOutline } from 'react-icons/ti';

//========== styles ==========
import {
	ContactWrapper,
	ContactName,
	PhoneNumber,
	DeleteBtn,
} from './ContactItem.styled';

export function ContactItem({
	contact: { name, number },
	deleteContact,
	dataId,
	...allyProps
}) {
	return (
		<>
			<ContactWrapper>
				<ContactName>{name}</ContactName>
				<PhoneNumber>{number}</PhoneNumber>
			</ContactWrapper>
			<DeleteBtn
				type="button"
				onClick={() => deleteContact(dataId)}
				title="Delete contact"
				{...allyProps}
			>
				<TiUserDeleteOutline />
			</DeleteBtn>
		</>
	);
}

ContactItem.propTypes = {
	contact: PropTypes.shape({
		name: PropTypes.string.isRequired,
		number: PropTypes.string.isRequired,
	}),
	deleteContact: PropTypes.func.isRequired,
	dataId: PropTypes.string.isRequired,
};
