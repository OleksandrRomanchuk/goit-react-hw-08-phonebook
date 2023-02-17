import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const modalContainer = document.getElementById('modalRoot');

const Modal = ({ toggleModal, children }) => {
	useEffect(() => {
		const onKeyDown = event => {
			if (event.code === 'Escape') {
				toggleModal();
			}
		};

		document.addEventListener('keydown', onKeyDown);

		return () => {
			document.removeEventListener('keydown', onKeyDown);
		};
	}, [toggleModal]);

	const onModalOpen = event => {
		if (event.target === event.currentTarget) {
			toggleModal();
		}
	};
	return createPortal(
		<div onClick={onModalOpen}>
			<div>{children}</div>
		</div>,
		modalContainer
	);
};

export default Modal;
