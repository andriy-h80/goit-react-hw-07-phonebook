import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { ContactsListItemStyled, ContactName, ButtonDelete } from './ContactListItem.styled';
import { deleteContact } from '../../redux/contactsSlice';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactsListItemStyled>
      <ContactName>
        {name}: {number}
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
    number: PropTypes.string,
};

export default ContactListItem;
