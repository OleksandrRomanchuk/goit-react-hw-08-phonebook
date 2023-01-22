import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { saveDataToLocalSt, loadDataFromLocalSt } from "helpers/localStfunc";

//========== components ==========
import { Section } from "components/Section/Section";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { Notification } from "components/Notification/Notification";
import { ContactList } from "components/ContactList/ContactList";

//========== styles ==========
import { PhonebookApp, Container, Title, Wrapper } from './App.styled';

const LS_KEY = 'contacts';

export function App() {
  const [contacts, setContacts] = useState(() => loadDataFromLocalSt(LS_KEY) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    saveDataToLocalSt(LS_KEY, contacts);
  }, [contacts]);

  const addNewContact = (newContact) => {
    newContact.id = nanoid();

    setContacts(state => [newContact, ...state]);
  };

  const deleteContact = (dataId) => {
    setContacts(contacts.filter(contact => contact.id !== dataId));
  };

  const setFilterWord = (event) => {
    setFilter(event.target.value.trim());
  };

  const filteredContacts = () => {
    const normalizeFilterWord = filter.toLowerCase();

    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizeFilterWord))
  };

  return (
      <PhonebookApp>
        <Container>
          <Title>Phonebook</Title>
          <Wrapper>
            <Section title="Form to add contacts">
              <ContactForm
                contactsList={contacts}
                getNewContactData={addNewContact} />
            </Section>
            
            <Section title="Contacts">
              {!contacts.length
                ? <Notification
                  message="There are no contacts" />
                : <>
                  <Filter
                    onChange={setFilterWord} />
                  <ContactList
                    contacts={filteredContacts()}
                    deleteContact={deleteContact} />
                </>}
            </Section>
          </Wrapper>
        </Container>
      </PhonebookApp>
    );
}

