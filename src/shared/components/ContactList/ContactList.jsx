import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import ContactItem from './ContactItem/ContactItem';
import Notification from '../Notification/Notification';

import { List, ListItem } from './ContactList.styled';

const ContactList = () => {
	const {
		contacts: { items },
	} = useSelector(selectFilteredContacts);

	const areContacts = Boolean(items.length);

	const listItems = items.map(contact => {
		return (
			<ListItem key={contact.id}>
				<ContactItem contact={contact} />
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

export default ContactList;
