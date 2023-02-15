import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

//========== components ==========
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Notification } from 'components/Notification/Notification';
import { ContactList } from 'components/ContactList/ContactList';

//========== styles ==========
import { PhonebookApp, Container, Title, Wrapper } from './App.styled';

export function App() {
	const contacts = useSelector(getContacts);

	return (
		<PhonebookApp>
			<Container>
				<Title>Phonebook</Title>
				<Wrapper>
					<Section title="Form to add contacts">
						<ContactForm />
					</Section>

					<Section title="Contacts">
						{!contacts.length ? (
							<Notification message="There are no contacts" />
						) : (
							<>
								<Filter />
								<ContactList />
							</>
						)}
					</Section>
				</Wrapper>
			</Container>
		</PhonebookApp>
	);
}
