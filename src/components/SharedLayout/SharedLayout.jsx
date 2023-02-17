import Header from 'components/Header/Header';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ContactForm } from 'components/ContactForm/ContactForm';

import { useState } from 'react';

const SharedLayout = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen(prevState => !prevState);
	};

	return (
		<div>
			<Header />
			<main>
				<button type="button" onClick={toggleModal}>
					ADD
				</button>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
				{isModalOpen && (
					<Modal toggleModal={toggleModal}>
						<ContactForm toggleModal={toggleModal} />
					</Modal>
				)}
			</main>
			<footer></footer>
		</div>
	);
};

export default SharedLayout;
