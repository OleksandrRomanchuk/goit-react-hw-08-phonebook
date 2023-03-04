import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectGroups } from 'redux/selectors';
import { pathNameNormalize } from 'helpers/pathNameNormalize';

import SharedLayout from 'components/SharedLayout/SharedLayout';
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const ContactDetailPage = lazy(() =>
	import('pages/ContactDetailPage/ContactDetailPage')
);
const EditPage = lazy(() => import('pages/EditPage/EditPage'));
const ContactsGroupPage = lazy(() => import('pages/GroupsPage/GroupsPage'));
const GroupContactList = lazy(() =>
	import('components/GroupContactList/GroupContactList')
);

const App = () => {
	const myGroups = useSelector(selectGroups);

	const myGroupsRoutes = myGroups.map(group => {
		const normalizedGroupName = pathNameNormalize(group);

		return (
			<Route
				key={group}
				path={
					normalizedGroupName === '---'
						? 'contacts-without-group'
						: normalizedGroupName
				}
				element={<GroupContactList group={group} />}
			/>
		);
	});

	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route index element={<HomePage />} />
				<Route path="my-contacts" element={<ContactsPage />}>
					<Route path=":id" element={<ContactDetailPage />} />
					<Route path="edit/:id" element={<EditPage />} />
				</Route>
				<Route path="my-groups" element={<ContactsGroupPage />}>
					{myGroupsRoutes}
				</Route>
				<Route
					path="/my-contacts/:id/details"
					element={<ContactDetailPage group="all" />}
				/>
				<Route path="/my-contacts/edit/:id" element={<EditPage />} />
				<Route path="*" element={<ContactsPage />} />
			</Route>
		</Routes>
	);
};

export default App;
