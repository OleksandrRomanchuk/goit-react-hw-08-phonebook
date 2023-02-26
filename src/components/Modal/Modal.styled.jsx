import styled from 'styled-components';

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	background-color: #8080808b;

	z-index: 2;
`;

export const ModalWindow = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;

	transform: translateX(-50%) translateY(-50%);

	padding: 35px 20px;

	background-color: #ffffff;
`;

export const Title = styled.h3`
	text-align: center;
`;
