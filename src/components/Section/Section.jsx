import PropTypes from 'prop-types';
import { AppSection, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
	return (
		<AppSection>
			<SectionTitle>{title}</SectionTitle>
			{children}
		</AppSection>
	);
};

Section.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Section;
