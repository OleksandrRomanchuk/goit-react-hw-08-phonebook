import AppNavigation from 'components/AppNavigation/AppNavigation';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<Link to="/">Phonebook</Link>
			<AppNavigation />
		</header>
	);
};

export default Header;
