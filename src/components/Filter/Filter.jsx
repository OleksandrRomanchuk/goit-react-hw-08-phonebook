//========== from libraries ==========
import { useSelector, useDispatch } from 'react-redux';

//========== selectors ==========
import { getFilter } from 'redux/selectors';

//========== actions ==========
import { setFilter } from 'redux/filterSlice';

//========== styles ==========
import { Input } from './Filter.styled';

export const Filter = () => {
	const filter = useSelector(getFilter);
	const dispatch = useDispatch();

	const inputChangeHandler = event => {
		const newFilter = event.target.value.toLowerCase();
		dispatch(setFilter(newFilter));
	};

	return (
		<Input
			value={filter}
			type="text"
			onChange={inputChangeHandler}
			placeholder="...find contact by name"
		/>
	);
};
