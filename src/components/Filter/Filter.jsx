//========== from libraries ==========
import { useSelector, useDispatch } from 'react-redux';

//========== selectors ==========
import { getFilter } from 'redux/selectors';

//========== actions ==========
import { setFilter } from 'redux/actions';

//========== styles ==========
import { Input } from './Filter.styled';

export const Filter = () => {
	const filter = useSelector(getFilter);
	const dispatch = useDispatch();

	return (
		<Input
			value={filter}
			type="text"
			onChange={e => dispatch(setFilter(e.target.value))}
			placeholder="...find contact by name"
		/>
	);
};
