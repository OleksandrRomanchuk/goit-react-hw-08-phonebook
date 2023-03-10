import SharedLayout from '../shared/components/SharedLayout/SharedLayout';
import PublicRoute from 'shared/components/PublicRoute/PublicRoute';
import PrivateRoute from 'shared/components/PrivateRoute/PrivateRoute';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authRefreshUser } from 'redux/auth/operation';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const EditPage = lazy(() => import('pages/EditPage/EditPage'));

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(authRefreshUser());
	}, [dispatch]);

	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route index element={<PublicRoute component={HomePage} />} />
				<Route
					path="/register"
					element={<PublicRoute component={RegisterPage} />}
				/>
				<Route path="/login" element={<PublicRoute component={LoginPage} />} />
				<Route
					path="/my-contacts"
					element={<PrivateRoute component={ContactsPage} />}
				>
					<Route path="edit/:id" element={<PrivateRoute component={EditPage} />} />
				</Route>
			</Route>
			<Route path="*" element={<ContactsPage />} />
		</Routes>
	);
};

export default App;
