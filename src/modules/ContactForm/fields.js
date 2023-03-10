export const fields = {
	name: {
		label: 'Name:',
		type: 'text',
		name: 'name',
		placeholder: 'Gregor .....',
		title:
			"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
		required: true,
	},
	number: {
		label: 'Number:',
		type: 'tel',
		name: 'number',
		placeholder: '+380 .....',
		title:
			'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
		required: true,
	},
};
