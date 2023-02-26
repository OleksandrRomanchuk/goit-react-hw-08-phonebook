import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { TiUserDeleteOutline } from 'react-icons/ti';
import { CgDetailsMore } from 'react-icons/cg';
// import { BiEditAlt } from 'react-icons/bi';
import { deleteContact } from 'redux/contactsSlice';
import {
	ContactWrapper,
	ContactName,
	PhoneNumber,
	BtnList,
	DeleteBtn,
	DetailBtn,
	// EditBtn,
} from './ContactItem.styled';

const ContactItem = ({
	contact: { contactName, contactPhoneNumber, id },
	...allyProps
}) => {
	const location = useLocation();
	const dispatch = useDispatch();

	return (
		<>
			<ContactName>{contactName}</ContactName>
			<ContactWrapper>
				<PhoneNumber>{contactPhoneNumber}</PhoneNumber>
				<BtnList>
					{/* <li>
						<EditBtn
							type="button"
							onClick={() => dispatch(deleteContact(id))}
							title="Delete contact"
							{...allyProps}
						>
							<BiEditAlt />
						</EditBtn>
					</li> */}
					<li>
						<DetailBtn to={id} state={{ from: location }} title="Show more details">
							<CgDetailsMore />
						</DetailBtn>
					</li>
					<li>
						<DeleteBtn
							type="button"
							onClick={() => dispatch(deleteContact(id))}
							title="Delete contact"
							{...allyProps}
						>
							<TiUserDeleteOutline />
						</DeleteBtn>
					</li>
				</BtnList>
			</ContactWrapper>
		</>
	);
};

ContactItem.propTypes = {
	contact: PropTypes.shape({
		contactName: PropTypes.string.isRequired,
		contactPhoneNumber: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
	}),
};

export default ContactItem;
