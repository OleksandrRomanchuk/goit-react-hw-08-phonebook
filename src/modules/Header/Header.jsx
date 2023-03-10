import Container from '../../shared/components/Container/Container';
import LoggedInNavBar from 'modules/LoggedInNavBar/LoggedInNavBar';
import LoggedOutNavBar from 'modules/LoggedOutNavBar/LoggedOutNavBar';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectToken } from 'redux/auth/selectors';

import { NavBar } from './Header.styled';

const Header = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	const token = useSelector(selectToken);

	return (
		<NavBar>
			<Container layout="flex">
				{isLoggedIn && <LoggedInNavBar />}
				{!isLoggedIn && !token && <LoggedOutNavBar />}
			</Container>
		</NavBar>
	);
};

export default Header;
