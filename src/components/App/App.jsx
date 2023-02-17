import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
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
			/>
		);
	});

	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route index element={<ContactsPage />} />
				<Route path="my-groups" element={<ContactsGroupPage />}>
					{myGroupsRoutes}
				</Route>
				<Route path="*" element={<ContactsPage />} />
			</Route>
		</Routes>
	);
};
