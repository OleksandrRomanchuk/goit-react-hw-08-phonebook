import Container from '../Container/Container';
import Filter from '../Filter/Filter';
import AppNavigation from '../AppNavigation/AppNavigation';
import { useLocation } from 'react-router-dom';
import { NavBar, Logo } from './Header.styled';

const Header = () => {
	const { pathname } = useLocation();
	const onGroupsPage = Boolean(pathname.includes('/my-groups'));

	return (
		<NavBar>
			<Container layout="flex">
				<Logo to="/">Phonebook</Logo>
				{!onGroupsPage && <Filter />}

				<AppNavigation />
			</Container>
		</NavBar>
	);
};

export default Header;