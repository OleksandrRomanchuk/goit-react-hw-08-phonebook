import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCurrentContact, selectContacts } from 'redux/contacts/selectors';
import { setCurrentContact } from 'redux/contacts/actions';
import { deleteContact } from 'redux/contacts/operations';
import { TiUserDeleteOutline } from 'react-icons/ti';
import { BiEditAlt } from 'react-icons/bi';

import { BtnList, DeleteBtn, EditBtn } from './BtnsList.styled';

const BtnsList = ({ id }) => {
	const { items } = useSelector(selectContacts);
	const contact = useSelector(selectCurrentContact);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const deleteBtnClickHandler = id => {
		dispatch(deleteContact(id));
		if (contact && contact.id === id) {
			navigate('/my-contacts');
		}
	};

	const editBtnClickHandler = id => {
		const currentContact = items.filter(item => item.id === id);

		dispatch(setCurrentContact(currentContact[0]));
	};

	return (
		<BtnList>
			<li>
				<EditBtn
					to={`/my-contacts/edit/${id}`}
					onClick={() => editBtnClickHandler(id)}
					title="Edit contact"
				>
					<BiEditAlt />
				</EditBtn>
			</li>
			<li>
				<DeleteBtn
					type="button"
					onClick={() => deleteBtnClickHandler(id)}
					title="Delete contact"
				>
					<TiUserDeleteOutline />
				</DeleteBtn>
			</li>
		</BtnList>
	);
};

BtnsList.propTypes = {
	id: PropTypes.string.isRequired,
};

export default BtnsList;
