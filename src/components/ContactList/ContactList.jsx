import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";
import ContactListItem from '../ContactListItem/ContactListItem';
import { ContactListStyled } from './ContactList.styled';

const ContactList = () => {

  const contacts = useSelector(getContacts);
  const filteredContacts = useSelector(getFilter);

  return (
    <ContactListStyled>
      {contacts.filter(contact => 
        contact.name.toLowerCase().includes(filteredContacts.toLowerCase()))
        .map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
         >
        </ContactListItem>
      ))}
    </ContactListStyled>
  );
};

export default ContactList;
