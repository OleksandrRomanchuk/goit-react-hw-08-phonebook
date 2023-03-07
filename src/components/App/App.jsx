import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout/SharedLayout';
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const ContactDetailPage = lazy(() =>
	import('pages/ContactDetailPage/ContactDetailPage')
);
const EditPage = lazy(() => import('pages/EditPage/EditPage'));

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route path="my-contacts" element={<ContactsPage />}>
					<Route path=":id" element={<ContactDetailPage />} />
					<Route path="edit/:id" element={<EditPage />} />
				</Route>
				<Route path="*" element={<ContactsPage />} />
			</Route>
		</Routes>
	);
};

export default App;
