import Logo from 'shared/components/Logo/Logo';
import Filter from '../../shared/components/Filter/Filter';
import UserMenu from 'shared/components/UserMenu/UserMenu';

const LoggedInNavBar = () => {
	return (
		<>
			<Logo />
			<Filter />
			<UserMenu />
		</>
	);
};

export default LoggedInNavBar;
