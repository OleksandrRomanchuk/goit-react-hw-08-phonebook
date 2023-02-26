import styled from 'styled-components';

export const AppSection = styled.section`
	display: flex;
	gap: 20px;

	width: 100%;
	height: 100%;
	padding-bottom: 15px;
`;

export const SectionTitle = styled.h2`
	position: relative;

	font-size: 20px;

	/* ::after {
		content: '';
		position: absolute;
		left: -10px;
		bottom: -6px;

		display: block;

		width: calc(100% + 20px);
		height: 1px;

		background-color: #ffffff66;
	} */
`;
