import Header from '../../../modules/Header/Header';
import Section from '../../../modules/Section/Section';
import Footer from '../Footer/Footer';
import ContactForm from '../../../modules/ContactForm/ContactForm';
import Modal from '../Modal/Modal';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

import { Body, Main } from './SharedLayout.styled';

const SharedLayout = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const dispatch = useDispatch();

	const toggleModal = () => {
		setIsModalOpen(prevState => !prevState);
	};

	const onAddFormSubmit = async credentials => {
		try {
			const { payload } = await dispatch(addContact(credentials));

			if (payload) {
				toggleModal();
				return true;
			}

			return false;
		} catch (error) {
			console.log('error: ', error);
		}
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
						<ContactForm onSubmit={onAddFormSubmit} />
					</Modal>
				)}
			</Main>
			<Footer />
		</Body>
	);
};

export default SharedLayout;
