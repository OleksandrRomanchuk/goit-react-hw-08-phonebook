import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentContact } from 'redux/selectors';
import { useParams } from 'react-router-dom';
import { fetchContactById } from 'redux/operations';
import { dateTransform } from 'helpers/dateTransform';

import {
	DetailsWrapper,
	IntroWrapper,
	DetailsPositioning,
	NamePositioning,
	PhonePositioning,
	Name,
	Date,
	DetailsSpan,
} from './ContactDetailPage.styled';

const ContactsSubPage = () => {
	const currentContact = useSelector(selectCurrentContact);
	const dispatch = useDispatch();
	const { id: itemId } = useParams();

	useEffect(() => {
		dispatch(fetchContactById(itemId));
	}, [dispatch, itemId]);

	if (!currentContact) return;

	return (
		<>
			{currentContact && (
				<DetailsWrapper>
					<IntroWrapper>
						<NamePositioning>
							<Name>{currentContact.name}</Name>
							<Date>
								<DetailsSpan>In my contacts since: </DetailsSpan>
								{dateTransform(currentContact.createdAt)}
							</Date>
						</NamePositioning>
					</IntroWrapper>
					<DetailsPositioning>
						<PhonePositioning>
							<p>
								<DetailsSpan>Phone number: </DetailsSpan>
								{currentContact.number}
							</p>
						</PhonePositioning>
					</DetailsPositioning>
				</DetailsWrapper>
			)}
		</>
	);
};

export default ContactsSubPage;
