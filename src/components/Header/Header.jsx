import Container from 'components/Container/Container';
import Filter from 'components/Filter/Filter';
import AppNavigation from 'components/AppNavigation/AppNavigation';
import { NavBar, Logo } from './Header.styled';

const Header = () => {
	return (
		<NavBar>
			<Container layout="flex">
				<Logo to="/my-contacts">Phonebook</Logo>
				<Filter />
				<AppNavigation />
			</Container>
		</NavBar>
	);
};

export default Header;
