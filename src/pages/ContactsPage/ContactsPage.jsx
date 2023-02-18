import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Section } from 'components/Section/Section';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Notification } from 'components/Notification/Notification';

const ContactsPage = () => {
	const contacts = useSelector(getContacts);
	const areContacts = Boolean(contacts.length);

	return (
		<Section title="Contacts">
			<div>
				{!areContacts && <Notification message="There are no contacts yet." />}
				{areContacts && (
					<>
						<Filter />
						<ContactList />
					</>
				)}
			</div>
			<div>
				<Suspense>
					<Outlet />
				</Suspense>
			</div>
		</Section>
	);
};

export default ContactsPage;
