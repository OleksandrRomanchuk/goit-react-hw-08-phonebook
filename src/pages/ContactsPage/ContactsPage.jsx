import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Section from 'components/Section/Section';
import ContactList from 'components/ContactList/ContactList';
import Notification from 'components/Notification/Notification';

import { LeftContainer, RigthContainer } from './ContactsPage.styled';

const ContactsPage = () => {
	const contacts = useSelector(selectContacts);
	const areContacts = Boolean(contacts.length);

	return (
		<Section>
			<LeftContainer>
				{!areContacts && <Notification message="There are no contacts yet." />}
				{areContacts && <ContactList />}
			</LeftContainer>
			<RigthContainer>
				<Suspense>
					<Outlet />
				</Suspense>
			</RigthContainer>
		</Section>
	);
};

export default ContactsPage;
