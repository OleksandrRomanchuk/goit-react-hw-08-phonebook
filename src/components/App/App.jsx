import { Component } from "react";
import { nanoid } from 'nanoid';

//========== components ==========
import { Section } from "components/Section/Section";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";

//========== styles ==========
import { PhonebookApp, Title } from './App.styled';

class App extends Component {
  state = {
    contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
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
      alert('No-no-no!');
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
    return (
      <PhonebookApp>

        <Title>Phonebook</Title>
        
        <Section title="Form to add contacts">
          <ContactForm
            onSubmit={this.addNewContact} />
        </Section>
        
        <Section title="Contacts">
          <Filter
            onChange={this.setFilterWord} />
          <ContactList
            contacts={this.filteredContacts}
            deleteContact={this.deleteContact} />
        </Section>

      </PhonebookApp>
    );
  };
};

export { App };