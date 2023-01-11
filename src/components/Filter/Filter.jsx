import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export function Filter({onChange}) {
    return <Label>
                Find contacts by name
                <Input type="text" onChange={onChange} />
            </Label>;
};

Filter.propTypes = { 
    onChange: PropTypes.func.isRequired,
}
