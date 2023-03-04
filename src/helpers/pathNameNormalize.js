export const pathNameNormalize = group => {
	const kebabCasePath = group.split(' ').join('-');

	return kebabCasePath.charAt(0).toLowerCase() + kebabCasePath.slice(1);
};
