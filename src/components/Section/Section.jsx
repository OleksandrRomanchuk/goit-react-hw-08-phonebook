//========== helpers ==========
import PropTypes from 'prop-types';

//========== styles ==========
import { AppSection, SectionTitle } from './Section.styled';

export function Section({ title, children }) {
	return (
		<AppSection>
			<SectionTitle>{title}</SectionTitle>
			{children}
		</AppSection>
	);
}

Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
