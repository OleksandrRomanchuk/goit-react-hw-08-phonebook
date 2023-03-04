import { useNavigate } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import libraries from 'data/libraries.json';

import {
	BorderBox,
	Wrapper,
	Container,
	Greeting,
	LibrariesWrapper,
	LibrariesHeaderText,
	List,
	Item,
	ItemName,
	ItemLink,
	StartBtn,
} from './HomePage.styled';

const HomePage = () => {
	const navigate = useNavigate();

	return (
		<Wrapper>
			<BorderBox>
				<Container>
					<Greeting>
						Hi! This is my first pet project created using the React.js library.
					</Greeting>
					<LibrariesWrapper>
						<LibrariesHeaderText>
							The following libraries were used in the creation of this project:
						</LibrariesHeaderText>
						<List>
							{libraries.map(({ name, gitHubURL }) => (
								<Item key={gitHubURL}>
									<ItemName>{name}</ItemName>
									<ItemLink href={gitHubURL} target="_blank">
										<AiFillGithub />
									</ItemLink>
								</Item>
							))}
						</List>
					</LibrariesWrapper>
					<StartBtn type="button" onClick={() => navigate('/my-contacts')}>
						Get started!
					</StartBtn>
				</Container>
			</BorderBox>
		</Wrapper>
	);
};

export default HomePage;
