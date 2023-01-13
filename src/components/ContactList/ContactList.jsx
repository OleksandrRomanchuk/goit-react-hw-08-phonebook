import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactList/ContactItem/ContactItem';
import { List, ListItem} from './ContactList.styled';

export function ContactList({deleteContact, contacts}) {
    return <List>
        {contacts().map((contact) => {
            return <ListItem
                key={contact.id}
                data-id={contact.id}>
                <ContactItem
                    contact={contact}
                    deleteContact={deleteContact}
                    aria-label="Delete contact" />
            </ListItem>
        })}
    </List>;
};

ContactList.propTypes = {
    contacts: PropTypes.func.isRequired,
}
