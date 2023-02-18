import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Link, useLocation } from 'react-router-dom';

const GroupContactList = ({ group }) => {
	const contacts = useSelector(getContacts);
	const location = useLocation();
	const filteredContactsByGroup = contacts.filter(contact => {
		if (contact.contactsGroup !== group) {
			return false;
		}

		return contact;
	});

	const elements = filteredContactsByGroup.map(
		({ id, contactName, contactPhoneNumber }) => (
			<li key={id}>
				<p>{contactName}</p>
				<p>{contactPhoneNumber}</p>
				<Link to={id} state={{ from: location }} title="Show more details">
					Show details
				</Link>
			</li>
		)
	);

	return <ul>{elements}</ul>;
};

export default GroupContactList;
