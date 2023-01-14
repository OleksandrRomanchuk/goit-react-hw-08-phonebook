import PropTypes from 'prop-types';
import { TiUserAddOutline } from 'react-icons/ti';
import { Form, Label, Input, SubmitBtn } from './ContactForm.styled';

export function ContactForm({ getNewContactData }) {
    return <Form onSubmit={(e) => getNewContactData(onFormSubmit(e))}>
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
    getNewContactData: PropTypes.func.isRequired,
}

function onFormSubmit(event) {
    event.preventDefault();

    const form = event.target;

    const newContact = [...form.elements].reduce((acc, elem) => {
      if (elem.name) {
        acc = {...acc, [elem.name]: elem.value,}
      }

      return acc;
    }, {});

    form.reset();
    
    return newContact;
}
