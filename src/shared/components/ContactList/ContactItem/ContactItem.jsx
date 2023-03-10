import PropTypes from 'prop-types';
import BtnsList from 'shared/components/BtnsList/BtnsList';

import { ContactWrapper, ContactName, PhoneNumber } from './ContactItem.styled';

const ContactItem = ({ contact: { name, number, id } }) => {
	return (
		<>
			<ContactWrapper>
				<ContactName>{name}</ContactName>
				<PhoneNumber>{number}</PhoneNumber>
			</ContactWrapper>
			<ContactWrapper>
				<BtnsList id={id} />
			</ContactWrapper>
		</>
	);
};

ContactItem.propTypes = {
	contact: PropTypes.shape({
		name: PropTypes.string.isRequired,
		number: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
	}),
};

export default ContactItem;
