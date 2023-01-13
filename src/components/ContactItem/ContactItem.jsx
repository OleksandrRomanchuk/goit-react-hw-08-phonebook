import PropTypes from 'prop-types';
import { TiUserDeleteOutline } from 'react-icons/ti';
import {ContactWrapper, ContactName, PhoneNumber, DeleteBtn} from './ContactItem.styled'

export function ContactItem({contact: {name, number}, deleteContact, ...allyProps}) {
    return <>
        <ContactWrapper>
            <ContactName>{name}</ContactName>
            <PhoneNumber>{number}</PhoneNumber>
        </ContactWrapper>
                
        <DeleteBtn
            type="button"
            onClick={deleteContact}
            title="Delete contact"
            {...allyProps}
        ><TiUserDeleteOutline />
        </DeleteBtn>
    </>;
};

// ContactItem.propTypes = {
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     deleteContact: PropTypes.func.isRequired,
// }