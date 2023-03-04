import styled from 'styled-components';

export const DetailsWrapper = styled.div`
	display: flex;
	flex-direction: column;

	min-width: 700px;
	padding: 25px;

	border-radius: 10px;
	background-color: rgb(7, 7, 34);
`;

export const IntroWrapper = styled.div`
	display: flex;
	gap: 30px;
`;

export const Avatar = styled.img`
	display: block;

	border-radius: 5px;
`;

export const DetailsPositioning = styled.div`
	display: flex;
	justify-content: space-between;

	margin-top: 35px;
`;

export const NamePositioning = styled.div`
	padding-top: 30px;
`;

export const PhonePositioning = styled.div`
	padding-left: 30px;
`;

export const Name = styled.h3`
	font-size: 28px;
	text-transform: uppercase;
`;

export const Details = styled.p`
	margin-top: 10px;
`;

export const Date = styled(Details)`
	font-size: 12px;
`;

export const DetailsSpan = styled.span`
	color: rgba(158, 158, 158, 1);
`;

export const LinksWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	text-align: center;
`;

export const GroupsSpan = styled(DetailsSpan)`
	font-size: 10px;
`;
