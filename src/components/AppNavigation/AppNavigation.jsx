import { NavLink } from 'react-router-dom';

const AppNavigation = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/">My contacts</NavLink>
				</li>
				<li>
					<NavLink to="/my-groups">My groups</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default AppNavigation;
