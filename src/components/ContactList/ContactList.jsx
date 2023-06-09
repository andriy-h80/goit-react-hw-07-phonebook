import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from '../../redux/operations'
import { selectContacts, selectFilter } from "../../redux/selectors";
import ContactListItem from '../ContactListItem/ContactListItem';
import { ContactListStyled } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilter);

  useEffect (() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactListStyled>
      {contacts.filter(contact => 
        contact.name.toLowerCase().includes(filteredContacts.toLowerCase()))
        .map(({ id, name, phone }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          phone={phone}
         >
        </ContactListItem>
      ))}
    </ContactListStyled>
  );
};

export default ContactList;
