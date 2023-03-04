import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ContactList from 'components/ContactList/ContactList';
import Notification from 'components/Notification/Notification';
import Loader from 'components/Loader/Loader';

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
				{isLoading && <Loader />}
				{!areContacts && !isLoading && (
					<Notification message="There are no contacts yet." />
				)}
				{areContacts && <ContactList />}
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
