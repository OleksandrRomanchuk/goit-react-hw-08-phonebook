import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
	display: flex;
	gap: 20px;
`;

export const PageLink = styled(NavLink)`
	padding: 15px 10px;

	text-decoration: none;

	transition: color 300ms ease-in-out;

	:hover,
	:focus {
		color: orangered;
	}

	&.active {
		color: orangered;
	}
`;
