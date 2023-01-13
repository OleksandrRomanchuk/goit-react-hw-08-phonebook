import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export function Filter({onChange}) {
    return <Input
        type="text"
        onChange={onChange}
        placeholder="...find contact by name" />;
};

Filter.propTypes = { 
    onChange: PropTypes.func.isRequired,
}
