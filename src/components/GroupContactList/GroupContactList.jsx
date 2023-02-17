import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

const GroupContactList = ({ group }) => {
	const contacts = useSelector(getContacts);
	const filteredContactsByGroup = contacts.filter(contact => {
		if (contact.contactsGroup === group) {
			return contact;
		}
		return false;
	});

	const elements = filteredContactsByGroup.map(
		({ id, contactName, contactPhoneNumber }) => (
			<li key={id}>
				<p>{contactName}</p>
				<p>{contactPhoneNumber}</p>
			</li>
		)
	);
	return <ul>{elements}</ul>;
};

export default GroupContactList;
