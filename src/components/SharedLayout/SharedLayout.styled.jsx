import styled from 'styled-components';

export const Body = styled.div`
	display: flex;
	flex-direction: column;

	height: 100vh;
`;

export const Main = styled.main`
	flex: 1 0 auto;

	padding-top: 60px;
`;

export const AddButton = styled.button`
	position: absolute;
	bottom: 25px;
	right: 25px;
	width: 50px;
	height: 50px;

	font-size: 24px;

	border: none;
	border-radius: 50%;
	cursor: pointer;
`;
