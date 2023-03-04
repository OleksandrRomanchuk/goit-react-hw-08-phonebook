import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import ContactItem from 'components/ContactList/ContactItem/ContactItem';
import Notification from 'components/Notification/Notification';
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
