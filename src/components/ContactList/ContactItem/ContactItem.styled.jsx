import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContactWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const ContactName = styled.p`
	font-size: 14px;
`;

export const PhoneNumber = styled.p`
	font-size: 12px;
	text-align: right;
`;

export const BtnList = styled.ul`
	display: flex;
	gap: 10px;

	margin-left: auto;
`;

export const DeleteBtn = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 20px;
	height: 20px;

	font-size: 14px;

	border-radius: 50%;
	border: none;
	outline: none;

	opacity: 0.4;

	transition: opacity 300ms ease, background-color 300ms ease, color 300ms ease,
		box-shadow 300ms ease;

	:hover,
	:focus {
		color: #ffffff;

		opacity: 1;
		background-color: #ff4500;
		box-shadow: 0px 0px 5px 2px #ff4500;
	}
`;

export const DetailBtn = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 20px;
	height: 20px;

	font-size: 14px;

	border-radius: 50%;
	border: none;
	outline: none;

	opacity: 0.4;

	transition: opacity 300ms ease, background-color 300ms ease, color 300ms ease,
		box-shadow 300ms ease;

	:hover,
	:focus {
		color: #ffffff;

		opacity: 1;
		background-color: blue;
		box-shadow: 0px 0px 5px 2px blue;
	}
`;

export const EditBtn = styled(DeleteBtn)`
	:hover,
	:focus {
		background-color: green;
		box-shadow: 0px 0px 5px 2px green;
	}
`;
