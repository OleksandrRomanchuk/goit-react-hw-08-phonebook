import styled from 'styled-components';

export const Form = styled.form`
	display: grid;
	grid-template-columns: repeat(4, 150px);
	gap: 20px;
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
	grid-column: span 2 / auto;

	padding: 25px;
	box-shadow: inset 0px 0px 3px 0px rgba(158, 158, 158, 1);
	border-radius: 3px;
`;

export const PositioningGruopWrapper = styled(PositioningWrapperMain)`
	grid-column: span 3 / auto;

	display: flex;
	justify-content: space-between;
	align-items: center;

	padding-top: 20px;
	padding-bottom: 20px;

	font-size: 13px;
`;

export const Label = styled.label`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 3px;

	font-size: 13px;

	:not(:first-child) {
		margin-top: 8px;
	}
`;

export const GroupLabel = styled(Label)`
	align-items: center;
	gap: 10px;

	:not(:first-child) {
		margin-top: 0;
	}
`;

export const GroupInput = styled.input`
	min-width: 165px;

	padding: 2px 3px;

	font-size: 12px;
	font-weight: 600;

	border-radius: 3px;
	border: none;
	outline: none;
`;

export const Input = styled(GroupInput)`
	min-width: 100%;
	max-width: 100%;

	font-size: 12px;
	text-align: center;
	color: rgba(158, 158, 158, 1);

	border: none;
	border-bottom: 1px solid rgba(158, 158, 158, 1);
	border-radius: 0;
	background-color: transparent;
	outline: none;
`;

export const GroupSelect = styled.select`
	min-width: 165px;

	padding: 2px 3px;

	font-size: 12px;
	font-weight: 600;

	border-radius: 3px;
	border: none;
	outline: none;
`;

export const GroupSpan = styled.span`
	font-size: 30px;
	font-weight: 700;
	width: -webkit-min-content;
	width: -moz-min-content;
	width: min-content;
	background: linear-gradient(
		220deg,
		rgba(250, 0, 46, 1) 0%,
		rgba(250, 0, 46, 1) 19%,
		transparent 19%,
		transparent 20%,
		rgba(232, 121, 17, 1) 20%,
		rgba(232, 121, 17, 1) 39%,
		transparent 39%,
		transparent 40%,
		rgba(241, 178, 17, 1) 40%,
		rgba(241, 178, 17, 1) 59%,
		transparent 59%,
		transparent 60%,
		rgba(42, 153, 159, 1) 60%,
		rgba(42, 153, 159, 1) 79%,
		transparent 79%,
		transparent 80%,
		rgba(24, 107, 184, 1) 80%,
		rgba(24, 107, 184, 1) 100%
	);
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
`;

export const SubmitBtn = styled.button`
	display: flex;
	gap: 4px;
	justify-content: center;
	align-items: center;

	min-height: 35px;
	margin: 0 auto;

	padding: 2px 10px;
	/* padding-right: 8px; */

	font-size: 16px;

	background-color: #ffffff;
	border: none;
	border-radius: 17px;

	transition: color 300ms ease, box-shadow 300ms ease,
		background-color 300ms ease;

	:hover,
	:focus {
		color: #ffffff;
		background-color: rgba(42, 153, 159, 1);
		box-shadow: 0px 0px 5px 2px rgba(42, 153, 159, 1);
	}
`;
