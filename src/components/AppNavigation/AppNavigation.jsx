import { List, PageLink } from './AppNavigation.styled';

const AppNavigation = () => {
	return (
		<nav>
			<List>
				<li>
					<PageLink to="/my-contacts">My contacts</PageLink>
				</li>
				<li>
					<PageLink to="/my-groups">My groups</PageLink>
				</li>
			</List>
		</nav>
	);
};

export default AppNavigation;
