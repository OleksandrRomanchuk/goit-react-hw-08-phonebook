export const pathNameNormalize = group => {
	const kebabCasePath = group.split(' ').join('-');
	// console.log('kebabCasePath: ', kebabCasePath);

	// console.log(kebabCasePath.charAt(0).toLowerCase());

	return kebabCasePath.charAt(0).toLowerCase() + kebabCasePath.slice(1);
};
