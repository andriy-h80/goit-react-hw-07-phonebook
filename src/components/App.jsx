import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Phonebook, Container } from './App.styled';
import { fetchContacts } from "../redux/operations";
import { selectContacts, selectIsLoading, selectError } from "../redux/selectors";
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Loader from '../components/Loader/Loader';
  
export default function App() {

  const dispatch = useDispatch();
  // Отримуємо частини стану
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <Phonebook >
        <Container>
          <h1>Phonebook</h1>
          <ContactForm /> 
          <h2>Contacts</h2>
          <Filter />
          {isLoading && <Loader />}
          {isLoading && !error && <b>Request in progress...</b>}
          {error && <p>{"Oops, mistake... Please try again"}</p>}
          <p>{contacts.length > 0 && JSON.stringify(contacts, null, 2)}</p>
          <ContactList />
        </Container>
      </Phonebook>
    );
};
