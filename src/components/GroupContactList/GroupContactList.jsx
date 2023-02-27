import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { Link, useLocation } from 'react-router-dom';

const GroupContactList = ({ group }) => {
	const contacts = useSelector(selectContacts);
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
				<Link
					to={`/my-contacts/${id}/details`}
					state={{ from: location }}
					title="Show more details"
				>
					Show details
				</Link>
			</li>
		)
	);

	return <ul>{elements}</ul>;
};

GroupContactList.propTypes = {
	group: PropTypes.string.isRequired,
};

export default GroupContactList;
