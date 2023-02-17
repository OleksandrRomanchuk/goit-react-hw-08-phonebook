import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { useState } from 'react';

import { Section } from 'components/Section/Section';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Notification } from 'components/Notification/Notification';

const ContactsPage = () => {
	const [contactDetailInfo, setContactDetailInfo] = useState(null);
	const contacts = useSelector(getContacts);
	const areContacts = Boolean(contacts.length);

	const contactItemClickHandler = itemId => {
		const chosenContactInfo = contacts.find(({ id }) => id === itemId);
		setContactDetailInfo(chosenContactInfo);
	};

	return (
		<Section title="Contacts">
			<div>
				{!areContacts && <Notification message="There are no contacts yet." />}
				{areContacts && (
					<>
						<Filter />
						<ContactList chooseContact={contactItemClickHandler} />
					</>
				)}
			</div>
			<div>
				{contactDetailInfo && (
					<>
						<p>{contactDetailInfo.contactName}</p>
						<p>{contactDetailInfo.contactPhoneNumber}</p>
					</>
				)}
			</div>
		</Section>
	);
};

export default ContactsPage;
