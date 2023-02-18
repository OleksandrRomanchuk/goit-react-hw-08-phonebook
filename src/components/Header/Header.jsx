import Container from 'components/Container/Container';
import AppNavigation from 'components/AppNavigation/AppNavigation';
import { NavBar, Logo } from './Header.styled';

const Header = () => {
	return (
		<NavBar>
			<Container layout="flex">
				<Logo to="/">Phonebook</Logo>
				<AppNavigation />
			</Container>
		</NavBar>
	);
};

export default Header;
