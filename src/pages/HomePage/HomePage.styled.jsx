import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	margin: auto;
`;

export const BorderBox = styled.div`
	min-height: calc(100vh - 60px * 2);
	height: 1px;
	margin: 0 auto;
	padding: 1px;

	border-radius: 15px;
	background: linear-gradient(
		219deg,
		#186cb8 19%,
		transparent 19%,
		transparent 20%,
		#2a9a9f 20%,
		#2a9a9f 39%,
		transparent 39%,
		transparent 40%,
		#f1b211 40%,
		#f1b211 59%,
		transparent 59%,
		transparent 60%,
		#e87911 60%,
		#e87911 79%,
		transparent 79%,
		transparent 80%,
		#f9002f 80%
	);

	@media screen and (min-width: 480px) {
		width: 480px;
	}

	@media screen and (min-width: 768px) {
		width: 760px;
	}

	@media screen and (min-width: 1280px) {
		width: 1280px;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	min-height: 100%;
	padding: 0 15px;

	border-radius: 15px;
	background-color: rgb(7, 7, 34);
`;

export const Greeting = styled.p`
	font-size: 18px;
	font-weight: 600;
	text-align: center;
`;

export const LibrariesWrapper = styled.div`
	margin-top: 35px;
	padding: 0 15px;
`;

export const LibrariesHeaderText = styled.p`
	text-align: center;
	color: #9e9e9e;
`;

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;

	margin-top: 20px;

	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (min-width: 1280px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

export const Item = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 15px;
	padding-top: 20px;

	border-radius: 5px;
	box-shadow: inset 0px 0px 3px 0px rgba(158, 158, 158, 1);
`;

export const ItemName = styled.h4`
	text-align: center;
	color: #9e9e9e;
`;

export const ItemLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 26px;
	height: 26px;
	margin-top: 10px;

	font-size: 25px;
	color: #ffffff;

	border-radius: 50%;

	transition: color 300ms ease-in-out;

	:hover,
	:focus {
		color: #f1b211;
	}
`;

export const StartBtn = styled.button`
	margin-top: 35px;

	font-family: inherit;
	padding: 10px 15px;

	font-size: 14px;
	font-weight: 700;
	text-transform: uppercase;

	border-radius: 30px;
	border: none;

	transition: background-color 300ms ease-in-out, box-shadow 300ms ease-in-out;

	:hover,
	:focus {
		box-shadow: 0 0 10px #fff, 0 0 150px #f1b211, 0 0 20px #f1b211,
			0 0 45px #f1b211, 0 0 65px #f1b211, 2px 2px 2px rgba(206, 89, 55, 0);
		background-color: #fffaed;
	}
`;
