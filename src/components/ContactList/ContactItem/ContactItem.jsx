import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { TiUserDeleteOutline } from 'react-icons/ti';
import { CgDetailsMore } from 'react-icons/cg';
import { BiEditAlt } from 'react-icons/bi';
import { deleteContact } from 'redux/operations';
import {
	ContactWrapper,
	ContactName,
	PhoneNumber,
	BtnList,
	DeleteBtn,
	DetailBtn,
	EditBtn,
} from './ContactItem.styled';

const ContactItem = ({ contact: { name, phoneNumber, id } }) => {
	const dispatch = useDispatch();
	const location = useLocation();

	return (
		<>
			<ContactWrapper>
				<ContactName>{name}</ContactName>
				<PhoneNumber>{phoneNumber}</PhoneNumber>
			</ContactWrapper>
			<ContactWrapper>
				<BtnList>
					<li>
						<DetailBtn to={id} state={{ from: location }} title="Show more details">
							<CgDetailsMore />
						</DetailBtn>
					</li>
					<li>
						<EditBtn
							to={`edit/${id}`}
							state={{ from: location }}
							title="Edit contact"
						>
							<BiEditAlt />
						</EditBtn>
					</li>
					<li>
						<DeleteBtn
							type="button"
							onClick={() => dispatch(deleteContact(id))}
							title="Delete contact"
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
		name: PropTypes.string.isRequired,
		phoneNumber: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
	}),
};

export default ContactItem;
