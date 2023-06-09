import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { ContactsListItemStyled, ContactName, ButtonDelete } from './ContactListItem.styled';
// import { deleteContact } from '../../redux/contactsSlice';
import { deleteContact } from "../../redux/operations";

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactsListItemStyled>
      <ContactName>
        {name}: {phone}
      </ContactName>
      <ButtonDelete type="button" aria-label="delete" onClick={handleDelete}>
        Delete
      </ButtonDelete>
    </ContactsListItemStyled>
  );
};

ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
};

export default ContactListItem;
