import styled from 'styled-components';

export const LeftContainer = styled.div`
	position: relative;

	display: flex;
	justify-content: center;

	width: 40%;
	max-height: calc(100vh - 140px);
	min-height: calc(100vh - 140px);

	border-radius: 10px;
`;

export const RigthContainer = styled.div`
	position: relative;

	width: 60%;
	max-height: calc(100vh - 140px);
	min-height: calc(100vh - 140px);
	padding: 2px;

	box-shadow: inset 0px 0px 3px 0px rgba(158, 158, 158, 1);
	border-radius: 10px;
	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 4px;
	}

	::-webkit-scrollbar-thumb {
		background-color: rgba(158, 158, 158, 1);
		border-radius: 2px;
	}
`;
