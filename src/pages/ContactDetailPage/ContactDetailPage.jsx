import SocialLinks from 'components/SocialLinks/SocialLinks';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useParams } from 'react-router-dom';
import { dateTransform } from 'helpers/dateTransform';

import {
	DetailsWrapper,
	IntroWrapper,
	Avatar,
	DetailsPositioning,
	NamePositioning,
	PhonePositioning,
	Name,
	Details,
	Date,
	DetailsSpan,
	LinksWrapper,
	GroupsSpan,
} from './ContactDetailPage.styled';

const ContactsSubPage = () => {
	const [contact, setContact] = useState(null);
	const { id: itemId } = useParams();
	const { items } = useSelector(selectContacts);
	const filter = useSelector(selectFilter);

	useEffect(() => {
		const chosenContactInfo = items.find(({ id }) => id === itemId);

		setContact(chosenContactInfo);
	}, [itemId, items]);

	if (!contact) return;

	const links = Object.values(contact.socialLinks);
	const areLinks = Boolean(links.some(link => link));

	return (
		<>
			{contact && !filter && (
				<DetailsWrapper>
					<IntroWrapper>
						<Avatar src={contact.avatar} alt={contact.name} />
						<NamePositioning>
							<Name>{contact.name}</Name>
							<Date>
								<DetailsSpan>In my contacts since: </DetailsSpan>
								{dateTransform(contact.createdAt)}
							</Date>
						</NamePositioning>
					</IntroWrapper>
					<DetailsPositioning>
						<PhonePositioning>
							<p>
								<DetailsSpan>Phone number: </DetailsSpan>
								{contact.phoneNumber}
							</p>
							{contact.email && (
								<Details>
									<DetailsSpan>Email: </DetailsSpan>
									{contact.email}
								</Details>
							)}

							<Details>
								<GroupsSpan>
									{contact.group === '---'
										? 'This contact is not tied to any of the groups.'
										: `In "${contact.group}" group.`}
								</GroupsSpan>
							</Details>
						</PhonePositioning>
						{areLinks && (
							<LinksWrapper>
								<DetailsSpan>Connect with:</DetailsSpan>
								<SocialLinks itemId={itemId} />
							</LinksWrapper>
						)}
					</DetailsPositioning>
				</DetailsWrapper>
			)}
		</>
	);
};

export default ContactsSubPage;
