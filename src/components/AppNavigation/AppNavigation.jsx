import { useLocation } from 'react-router-dom';

import { AppNav, PageLink } from './AppNavigation.styled';

const AppNavigation = () => {
	const { pathname } = useLocation();
	const ongroupsPage = Boolean(pathname.includes('/my-groups'));

	return (
		<AppNav ongroupsPage={ongroupsPage}>
			<PageLink to="/my-contacts">My contacts</PageLink>
		</AppNav>
	);
};

export default AppNavigation;
