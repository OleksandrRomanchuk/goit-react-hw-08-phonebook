import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;

	background-color: #ffffff;

	border-bottom: 1px solid black;
`;

export const Logo = styled(Link)`
	padding: 15px 10px;
`;
