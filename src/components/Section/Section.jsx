import PropTypes from 'prop-types';
import { AppSection, SectionTitle } from './Section.styled';

export function Section({title, children}) {
    return <AppSection>
                {title && <SectionTitle>{title}</SectionTitle>}
                {children}
            </AppSection>;
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

