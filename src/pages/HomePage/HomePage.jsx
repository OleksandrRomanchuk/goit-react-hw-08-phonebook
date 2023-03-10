import { Wrapper, Text, BtnList, Button } from './HomePage.styled';

const HomePage = () => {
	return (
		<Wrapper>
			<Text>This is an application in which you can store your contacts. </Text>
			<Text>Please sign up or log in to get started.</Text>

			<BtnList>
				<li>
					<Button to="/register">Sign up</Button>
				</li>
				<li>
					<Button to="/login">Log in</Button>
				</li>
			</BtnList>
		</Wrapper>
	);
};

export default HomePage;
