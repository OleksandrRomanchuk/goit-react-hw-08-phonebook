import PropTypes from 'prop-types';

import { Wrapper, FlexWrapper } from './Container.styled';

const Container = ({ layout, children }) => {
	if (layout === 'flex') {
		return <FlexWrapper>{children}</FlexWrapper>;
	}

	return <Wrapper display={layout}>{children}</Wrapper>;
};

Container.propTypes = {
	layout: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Container;
