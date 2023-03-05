import styled from 'styled-components';

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 10px;

	width: 100%;
	max-height: calc(100vh - 140px);
	min-height: calc(100vh - 140px);
	padding-right: 5px;
	padding-left: 50px;

	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 4px;
	}

	::-webkit-scrollbar-thumb {
		background-color: #80808054;
		border-radius: 2px;
	}
`;

export const Item = styled.li`
	position: relative;
	padding-left: 20px;

	::before {
		content: '';
		position: absolute;
		left: 5px;
		top: calc(50% - 3px);

		width: 5px;
		height: 5px;

		border-radius: 50%;
		background-color: rgba(232, 121, 17, 1);
	}
`;

export const ItemName = styled.button`
	font-family: inherit;
	font-size: 16px;
	color: ${({ selected }) => (selected ? 'rgba(42, 153, 159, 1)' : 'inherit')};

	background: none;
	border: none;
	outline: none;

	transition: color 300ms ease-in-out;

	:hover,
	:focus {
		color: rgba(241, 178, 17, 1);
	}
`;
