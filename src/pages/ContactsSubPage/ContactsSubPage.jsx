import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { useParams } from 'react-router-dom';

const ContactsSubPage = () => {
	const contacts = useSelector(getContacts);
	const { id: itemId } = useParams();

	const chosenContactInfo = contacts.find(({ id }) => id === itemId);

	return (
		<div>
			<p>{chosenContactInfo.contactName}</p>
			<p>{chosenContactInfo.contactPhoneNumber}</p>
			<p>{chosenContactInfo.contactsGroup}</p>
		</div>
	);
};

export default ContactsSubPage;
