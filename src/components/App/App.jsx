import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage/HomePage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import ContactsSubPage from 'pages/ContactsSubPage/ContactsSubPage';
import ContactsGroupPage from 'pages/ContactsGroupPage/ContactsGroupPage';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getContactPropertyValues } from 'helpers/getContactPropertyValues';
import { pathNameNormalize } from 'helpers/pathNameNormalize';
import GroupContactList from 'components/GroupContactList/GroupContactList';

export const App = () => {
	const myGroups = getContactPropertyValues(
		useSelector,
		getContacts,
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
				<Route path="my-groups/:id/details" element={<ContactsSubPage />} />
				<Route path="*" element={<ContactsPage />} />
			</Route>
		</Routes>
	);
};
