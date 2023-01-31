//========== helpers ==========
import PropTypes from 'prop-types';

//========== components ==========
import { ContactItem } from 'components/ContactList/ContactItem/ContactItem';

//========== styles ==========
import { List, ListItem } from './ContactList.styled';

export function ContactList({ deleteContact, contacts }) {
	return (
		<List>
			{contacts.map(contact => {
				return (
					<ListItem key={contact.id}>
						<ContactItem
							contact={contact}
							deleteContact={deleteContact}
							dataId={contact.id}
							aria-label="Delete contact"
						/>
					</ListItem>
				);
			})}
		</List>
	);
}

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		})
	),
};
