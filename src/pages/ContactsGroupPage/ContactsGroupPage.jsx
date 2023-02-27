import Section from 'components/Section/Section';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { getContactPropertyValues } from 'helpers/getContactPropertyValues';
import { pathNameNormalize } from 'helpers/pathNameNormalize';
import {
	LeftContainer,
	RigthContainer,
} from 'pages/ContactsPage/ContactsPage.styled';

const ContactsGroupPage = () => {
	const myGroups = getContactPropertyValues(
		useSelector,
		selectContacts,
		'contactsGroup'
	);

	const elements = myGroups.map(groupName => {
		const normalizedGroupName = pathNameNormalize(groupName);
		return (
			<li key={groupName}>
				<NavLink
					to={
						normalizedGroupName === '---'
							? 'contacts-without-group'
							: normalizedGroupName
					}
				>
					{groupName === '---' ? 'Contacts without group' : groupName}
				</NavLink>
			</li>
		);
	});

	return (
		<Section>
			<LeftContainer>
				<ul>{elements}</ul>
			</LeftContainer>
			<RigthContainer>
				<Suspense>
					<Outlet />
				</Suspense>
			</RigthContainer>
		</Section>
	);
};

export default ContactsGroupPage;
