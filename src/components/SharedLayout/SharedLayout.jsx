import Header from 'components/Header/Header';
import Section from 'components/Section/Section';
import Footer from 'components/Footer/Footer';
import ContactForm from 'components/ContactForm/ContactForm';
import Modal from 'components/Modal/Modal';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Body, Main } from './SharedLayout.styled';

const SharedLayout = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen(prevState => !prevState);
	};

	return (
		<Body>
			<Header />
			<Main>
				<Section toggleModal={toggleModal}>
					<Suspense>
						<Outlet />
					</Suspense>
				</Section>
				{isModalOpen && (
					<Modal
						toggleModal={toggleModal}
						title="Here you can add a new contact to your phone book."
					>
						<ContactForm toggleModal={toggleModal} />
					</Modal>
				)}
			</Main>
			<Footer />
		</Body>
	);
};

export default SharedLayout;
