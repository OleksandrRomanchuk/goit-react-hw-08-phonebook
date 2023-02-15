//========== from libraries ==========
import { useSelector } from 'react-redux';

//========== selectors ==========
import { getContacts, getFilter } from 'redux/selectors';

//========== components ==========
import { ContactItem } from 'components/ContactList/ContactItem/ContactItem';

//========== styles ==========
import { List, ListItem } from './ContactList.styled';

export const ContactList = () => {
	const contacts = useSelector(getContacts);
	const filter = useSelector(getFilter);
	const filterNormalize = filter.toLowerCase();
	const filteredContacts = contacts.filter(({ name }) =>
		name.toLowerCase().includes(filterNormalize)
	);

	const listItems = filteredContacts.map(contact => {
		return (
			<ListItem key={contact.id}>
				<ContactItem contact={contact} aria-label="Delete contact" />
			</ListItem>
		);
	});

	return <List>{listItems}</List>;
};
