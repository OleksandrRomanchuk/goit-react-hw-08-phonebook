import PropTypes from 'prop-types';
import { List, ContactName, PhoneNumber, DeleteBtn } from './ContactList.styled';

export function ContactList({deleteContact, contacts}) {
    return <List>
        {contacts().map(({ id, name, number }) => {
            return <li key={ id } data-id={id}>
                <ContactName>{ name }</ContactName>
                <PhoneNumber>{number}</PhoneNumber>
                <DeleteBtn type="button" onClick={deleteContact}>Delete</DeleteBtn>
                    </li>
                })}
            </List>;
};

ContactList.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.func.isRequired,
    // contacts: PropTypes.arrayOf(PropTypes.shape({
    //     id: PropTypes.string.isRequired,
    //     name: PropTypes.string.isRequired,
    //     number: PropTypes.string.isRequired,
    // })),
}
