import { Section } from 'components/Section/Section';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { getContactPropertyValues } from 'helpers/getContactPropertyValues';
import { pathNameNormalize } from 'helpers/pathNameNormalize';

const ContactsGroupPage = () => {
	const myGroups = getContactPropertyValues(
		useSelector,
		getContacts,
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
		<Section title="Your groups">
			<div>
				<ul>{elements}</ul>
			</div>
			<div>
				<Suspense>
					<Outlet />
				</Suspense>
			</div>
		</Section>
	);
};

export default ContactsGroupPage;
