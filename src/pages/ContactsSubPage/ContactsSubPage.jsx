import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { useParams } from 'react-router-dom';

const ContactsSubPage = () => {
	const contacts = useSelector(getContacts);
	const { id: itemId } = useParams();

	const chosenContactInfo = contacts.find(({ id }) => id === itemId);

	return (
		<div>
			{chosenContactInfo && (
				<>
					<p>
						<span>Name: </span>
						{chosenContactInfo.contactName}
					</p>
					<p>
						<span>Phone number: </span>
						{chosenContactInfo.contactPhoneNumber}
					</p>
					<p>
						<span>
							{chosenContactInfo.contactsGroup === '---'
								? 'this contact is not tied to any of the groups.'
								: `In "${chosenContactInfo.contactsGroup}" group.`}
						</span>
					</p>
				</>
			)}
		</div>
	);
};

export default ContactsSubPage;
