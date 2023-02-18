import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { Link, useLocation } from 'react-router-dom';
import { ContactItem } from 'components/ContactList/ContactItem/ContactItem';
import { Notification } from 'components/Notification/Notification';

//========== styles ==========
import { List, ListItem } from './ContactList.styled';

export const ContactList = () => {
	const contacts = useSelector(getContacts);
	const filter = useSelector(getFilter);
	const location = useLocation();
	const filteredContacts = contacts.filter(({ contactName }) =>
		contactName.toLowerCase().includes(filter)
	);
	const areContacts = Boolean(filteredContacts.length);

	const listItems = filteredContacts.map(contact => {
		return (
			<ListItem key={contact.id}>
				<ContactItem contact={contact} aria-label="Delete contact" />
				<Link to={contact.id} state={{ from: location }} title="Show more details">
					Show details
				</Link>
			</ListItem>
		);
	});

	return (
		<>
			{!areContacts && (
				<Notification message="There is no contact with such name." />
			)}
			{areContacts && <List>{listItems}</List>}
		</>
	);
};
