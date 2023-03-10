import PropTypes from 'prop-types';
import Container from '../../shared/components/Container/Container';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import { AppSection, AddButton } from './Section.styled';

const Section = ({ toggleModal, children }) => {
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return (
		<AppSection>
			<Container layout="flex">
				{isLoggedIn && (
					<AddButton type="button" onClick={toggleModal} title="Add new contact">
						+
					</AddButton>
				)}

				{children}
			</Container>
		</AppSection>
	);
};

Section.propTypes = {
	toggleModal: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export default Section;
