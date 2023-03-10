import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Text = styled.p`
	:not(:first-child) {
		margin-top: 15px;
	}
`;

export const BtnList = styled.ul`
	display: flex;
	gap: 30px;

	margin-top: 50px;
`;

export const Button = styled(NavLink)`
	display: flex;
	gap: 4px;
	justify-content: center;
	align-items: center;

	min-width: 100px;
	min-height: 35px;
	margin: 0 auto;

	padding: 2px 10px;

	font-size: 16px;
	color: #000;

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
