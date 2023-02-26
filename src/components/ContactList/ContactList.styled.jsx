import styled from 'styled-components';

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 10px;

	max-height: calc(100vh - 62px * 2);

	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 4px;
	}

	::-webkit-scrollbar-thumb {
		background-color: #80808054;
		border-radius: 2px;
	}
	/* margin-top: 20px;
    padding: 0 5px;

    text-align: left;

    

     */
`;

export const ListItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 10px 6px;

	border: 1px solid black;
	border-radius: 3px;
	/* display: flex;
    gap: 6px;
    justify-content: center;
    align-items: center;

    min-height: 30px;
    max-height: 30px;

    padding-bottom: 1px;

    border-bottom: 1px solid #ffffff66;

    :not(:first-child) {
        margin-top: 10px;
    } */
`;
