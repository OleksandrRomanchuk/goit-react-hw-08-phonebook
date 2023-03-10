import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 25px;
	align-items: center;

	padding: 35px;

	border-radius: 10px;
	background-color: rgb(7, 7, 34);
`;

export const EditForm = styled(Form)`
	min-height: 100%;
	max-height: 100%;

	padding: 30px 21px;
`;

export const PositioningWrapperMain = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 15px;

	padding: 25px;
	box-shadow: inset 0px 0px 3px 0px rgba(158, 158, 158, 1);
	border-radius: 3px;
`;
