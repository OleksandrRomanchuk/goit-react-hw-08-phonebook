import { AppNav, List, PageLink } from './Navigation.styled';

const Navigation = () => {
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

export default Navigation;
