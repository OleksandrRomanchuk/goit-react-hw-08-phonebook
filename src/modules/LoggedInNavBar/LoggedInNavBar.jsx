import Logo from 'shared/components/Logo/Logo';
import Filter from '../../shared/components/Filter/Filter';
import LoggedInUserInfo from 'shared/components/LoggedInUserInfo/LoggedInUserInfo';

const LoggedInNavBar = () => {
	return (
		<>
			<Logo />
			<Filter />
			<LoggedInUserInfo />
		</>
	);
};

export default LoggedInNavBar;
