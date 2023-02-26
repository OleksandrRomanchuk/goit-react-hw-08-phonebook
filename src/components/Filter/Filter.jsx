import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import { Input } from './Filter.styled';

const Filter = () => {
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

export default Filter;
