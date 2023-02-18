import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader/Loader';
import Footer from 'components/Footer/Footer';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { useState } from 'react';

import { Body, Main, AddButton } from './SharedLayout.styled';

const SharedLayout = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { pathname } = useLocation();
	console.log('pathname: ', pathname);
	const onHomePage = pathname === '/';

	const toggleModal = () => {
		setIsModalOpen(prevState => !prevState);
	};

	if (onHomePage) {
		return (
			<Body>
				<Main>
					<Container>
						<Suspense fallback={<Loader />}>
							<Outlet />
						</Suspense>
					</Container>
				</Main>
			</Body>
		);
	}

	return (
		<Body>
			<Header />
			<Main>
				<Container>
					<AddButton type="button" onClick={toggleModal}>
						+
					</AddButton>
					<Suspense fallback={<Loader />}>
						<Outlet />
					</Suspense>
				</Container>
				{isModalOpen && (
					<Modal toggleModal={toggleModal} title="Form to add contact">
						<ContactForm toggleModal={toggleModal} />
					</Modal>
				)}
			</Main>
			<Footer />
		</Body>
	);
};

export default SharedLayout;
