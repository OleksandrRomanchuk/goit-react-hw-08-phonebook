import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { getContactPropertyValues } from 'helpers/getContactPropertyValues';
import { pathNameNormalize } from 'helpers/pathNameNormalize';

import SharedLayout from 'components/SharedLayout/SharedLayout';
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const ContactsSubPage = lazy(() =>
	import('pages/ContactsSubPage/ContactsSubPage')
);
const ContactsGroupPage = lazy(() =>
	import('pages/ContactsGroupPage/ContactsGroupPage')
);
const GroupContactList = lazy(() =>
	import('components/GroupContactList/GroupContactList')
);

const App = () => {
	const myGroups = getContactPropertyValues(
		useSelector,
		selectContacts,
		'contactsGroup'
	);

	const myGroupsRoutes = myGroups.map(groupName => {
		const normalizedGroupName = pathNameNormalize(groupName);
		return (
			<Route
				key={groupName}
				path={
					normalizedGroupName === '---'
						? 'contacts-without-group'
						: normalizedGroupName
				}
				element={<GroupContactList group={groupName} />}
			>
				<Route path=":id" element={<ContactsSubPage />} />
			</Route>
		);
	});

	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route index element={<HomePage />} />
				<Route path="my-contacts" element={<ContactsPage />}>
					<Route path=":id" element={<ContactsSubPage />} />
				</Route>
				<Route path="my-groups" element={<ContactsGroupPage />}>
					{myGroupsRoutes}
				</Route>
				<Route path="/my-contacts/:id/details" element={<ContactsSubPage />} />
				<Route path="*" element={<ContactsPage />} />
			</Route>
		</Routes>
	);
};

export default App;
