import Loader from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectGroups, selectIsLoading } from 'redux/selectors';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { pathNameNormalize } from 'helpers/pathNameNormalize';

import {
	LeftContainer,
	RigthContainer,
} from 'pages/ContactsPage/ContactsPage.styled';
import { List, Item, ItemName } from './GroupsPage.styled';

const ContactsGroupPage = () => {
	const myGroups = useSelector(selectGroups);
	const isLoading = useSelector(selectIsLoading);

	const elements = myGroups.map(groupName => {
		const normalizedGroupName = pathNameNormalize(groupName);
		return (
			<Item key={groupName}>
				<ItemName
					to={
						normalizedGroupName === '---'
							? 'contacts-without-group'
							: normalizedGroupName
					}
				>
					{groupName === '---' ? 'Contacts without group' : groupName}
				</ItemName>
			</Item>
		);
	});

	return (
		<>
			<LeftContainer>
				<List>{elements}</List>
			</LeftContainer>
			<RigthContainer>
				{isLoading && <Loader />}
				<Suspense>
					<Outlet />
				</Suspense>
			</RigthContainer>
		</>
	);
};

export default ContactsGroupPage;
