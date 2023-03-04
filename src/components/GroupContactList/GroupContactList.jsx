import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { useLocation } from 'react-router-dom';
import { TiUserDeleteOutline } from 'react-icons/ti';
import { CgDetailsMore } from 'react-icons/cg';
import { BiEditAlt } from 'react-icons/bi';

import {
	BtnList,
	EditBtn,
	DetailBtn,
	DeleteBtn,
} from 'components/ContactList/ContactItem/ContactItem.styled';
import {
	List,
	Item,
	IntroWrapper,
	NameWrapper,
	Avatar,
	Name,
	PhoneNumber,
} from './GroupContactList.styled';

const GroupContactList = ({ group }) => {
	const { items, isLoading } = useSelector(selectContacts);
	const dispatch = useDispatch();
	const location = useLocation();
	const filteredContactsByGroup =
		group === 'All'
			? items
			: items.filter(contact => {
					if (contact.group !== group) {
						return false;
					}

					return contact;
			  });

	const elements = filteredContactsByGroup.map(
		({ id, name, phoneNumber, avatar }) => (
			<Item key={id}>
				<IntroWrapper>
					<Avatar src={avatar} alt={name} />
					<NameWrapper>
						<div>
							<Name>{name}</Name>
							<PhoneNumber>{phoneNumber}</PhoneNumber>
						</div>

						<div>
							<BtnList>
								<li>
									<DetailBtn
										to={`/my-contacts/${id}/details`}
										state={{ from: location }}
										title="Show more details"
									>
										<CgDetailsMore />
									</DetailBtn>
								</li>
								<li>
									<EditBtn
										to={`/my-contacts/edit/${id}`}
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
						</div>
					</NameWrapper>
				</IntroWrapper>
			</Item>
		)
	);

	return (
		<>
			{isLoading && <Loader />}
			<List>{elements}</List>
		</>
	);
};

GroupContactList.propTypes = {
	group: PropTypes.string.isRequired,
};

export default GroupContactList;
