import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ContactList from 'shared/components/ContactList/ContactList';
import Notification from 'shared/components/Notification/Notification';

import { LeftContainer, RigthContainer } from './ContactsPage.styled';

const ContactsPage = () => {
	const dispatch = useDispatch();
	const { items, isLoading, error } = useSelector(selectContacts);

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	const areContacts = Boolean(items.length);

	return (
		<>
			<LeftContainer>
				{!areContacts && !isLoading && (
					<Notification message="There are no contacts yet." />
				)}
				{areContacts && !error && <ContactList />}
				{error && (
					<Notification message="Something went wrong! Please reload the page or try again later." />
				)}
			</LeftContainer>
			<RigthContainer>
				<Suspense>
					<Outlet />
				</Suspense>
			</RigthContainer>
		</>
	);
};

export default ContactsPage;
