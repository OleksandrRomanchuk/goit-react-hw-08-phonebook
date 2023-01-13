import PropTypes from 'prop-types';
import { TiUserDeleteOutline } from 'react-icons/ti';
import { List, ListItem, ContactWrapper, ContactName, PhoneNumber, DeleteBtn } from './ContactList.styled';

export function ContactList({deleteContact, contacts}) {
    return <List>
        {contacts().map(({ id, name, number }) => {
            return <ListItem key={id} data-id={id}>
                <ContactWrapper>
                    <ContactName>{ name }</ContactName>
                    <PhoneNumber>{number}</PhoneNumber>
                </ContactWrapper>
                
                <DeleteBtn
                    type="button"
                    onClick={deleteContact}
                    title="Delete contact"
                    ><TiUserDeleteOutline/>
                </DeleteBtn>
                    </ListItem>
                })}
            </List>;
};

ContactList.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.func.isRequired,
}
