export const getContactPropertyValues = (func, toDo, property) => {
	const array = func(toDo);
	const valuesOfProperties = array
		.map(contact => {
			return contact[property];
		})
		.filter((item, ind, arr) => ind === arr.indexOf(item))
		.sort((a, b) => a.localeCompare(b));

	return valuesOfProperties;
};
