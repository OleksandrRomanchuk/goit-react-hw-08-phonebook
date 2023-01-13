import { Component } from "react";
import { nanoid } from 'nanoid';

//========== components ==========
import { Section } from "components/Section/Section";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { Notification } from "components/Notification/Notification";
import { ContactList } from "components/ContactList/ContactList";

//========== styles ==========
import { PhonebookApp, Container, Title, Wrapper } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addNewContact = (event) => {
    event.preventDefault();

    const form = event.target;

    const newContact = [...form.elements].reduce((acc, elem) => {
      if (elem.name) {
        acc = {...acc, [elem.name]: elem.value,}
      }

      return acc;
    }, {id: nanoid()});

    if (this.checkNewContact(newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return {...prevState, contacts: [newContact, ...this.state.contacts]}
    });

    this.resetForm(form);
  }

  deleteContact = (event) => {
    const contactId = event.target.closest('[data-id]').dataset.id;
    
    this.setState((prevState) => {
      return {...prevState, contacts: prevState.contacts.filter(contact => contact.id !== contactId)}
    });
  }

  setFilterWord = (event) => {
    this.setState(prevState => {
      return {...prevState, filter: event.target.value.trim()}
    });
  }

  filteredContacts = () => {
    const normalizeFilterWord = this.state.filter.toLowerCase();

    return this.state.contacts.filter(({name}) => name.toLowerCase().includes(normalizeFilterWord))
  }

  resetForm = (form) => {
    [...form.elements].forEach(elem => {
      if (elem.name) {
        elem.value = '';
      }
    });
  }

  checkNewContact = (newName) => {
    return this.state.contacts.some(({ name }) => name === newName);
  }
  
  render() {
    const contacsCount = this.state.contacts.length;

    return (
      <PhonebookApp>
        <Container>
          <Title>Phonebook</Title>
          <Wrapper>
            <Section title="Form to add contacts">
              <ContactForm
                onSubmit={this.addNewContact} />
            </Section>
            
            <Section title="Contacts">
              {!contacsCount
                ? <Notification
                  message="There are no contacts" />
                : <><Filter
                  onChange={this.setFilterWord} /><ContactList
                    contacts={this.filteredContacts}
                    deleteContact={this.deleteContact} /></>}
            </Section>
          </Wrapper>
        </Container>
      </PhonebookApp>
    );
  };
};

export { App };