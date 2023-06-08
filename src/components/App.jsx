  import { Phonebook, Container } from './App.styled';
  import ContactForm from './ContactForm/ContactForm';
  import Filter from './Filter/Filter';
  import ContactList from './ContactList/ContactList';
  
  export default function App() {

      return (
        <Phonebook >
          <Container>
            <h1>Phonebook</h1>
            <ContactForm /> 
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
          </Container>
        </Phonebook>
      );
  };
