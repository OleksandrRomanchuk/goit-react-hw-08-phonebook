import PropTypes from 'prop-types';
import { TiUserAddOutline } from 'react-icons/ti';
import { Form, Label, Input, SubmitBtn } from './ContactForm.styled';

export function ContactForm({contactsList, getNewContactData}) {
    const onFormSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const newContact = [...form.elements].reduce((acc, elem) => {
            if (elem.name) {
                acc = { ...acc, [elem.name]: elem.value }; 
            };

            return acc;
        }, {});

        if (checkNewContact(newContact.name)) {
            alert(`${newContact.name} is already in contacts.`);
            return;
        };

        getNewContactData(newContact);

        form.reset();
    };

    const checkNewContact = (newName) => {
        return contactsList.some(({ name }) => name === newName);
    };

        return <Form onSubmit={onFormSubmit}>
            <Label>
                Name
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                /></Label>
            
            <Label>
                Number
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                /></Label>
            
            <SubmitBtn
                type="submit">
                <TiUserAddOutline
                    style={{ fontSize: 14, }} />
                Add contact
            </SubmitBtn>
        </Form>;
};

ContactForm.propTypes = {
        contactsList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
        getNewContactData: PropTypes.func.isRequired,
    };