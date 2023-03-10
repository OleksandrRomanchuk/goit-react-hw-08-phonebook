import { AppNav, List, PageLink } from './AppNavigation.styled';

const AppNavigation = () => {
	return (
		<AppNav>
			<List>
				<li>
					<PageLink to="/register">Sign up</PageLink>
				</li>
				<li>
					<PageLink to="/login">Log in</PageLink>
				</li>
			</List>
		</AppNav>
	);
};

export default AppNavigation;
