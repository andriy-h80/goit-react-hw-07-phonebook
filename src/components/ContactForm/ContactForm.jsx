import { useDispatch, useSelector } from "react-redux";
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';
import { Form, ButtonAdd } from './ContactForm.styled';

const ContactForm = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleSubmit = event => {
        event.preventDefault();
        const { name, number } = event.currentTarget;

        const isContactExist = contacts.some(
            contact => contact.name.toLowerCase() === name.value.toLowerCase()
        );
        
        if (isContactExist) {
            alert(`${name.value} is already in contacts`);
            event.currentTarget.reset();
            return;
        }

        dispatch(addContact(name.value, number.value));
        event.currentTarget.reset();
      };

    return (
        <Form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name: 
            </label>
            <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required
            id="name"
            />

            <label htmlFor="number">
                Number: 
            </label>
            <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" required
            id="number"
            />  

            <ButtonAdd type='submit' aria-label="Add contact">Add contact</ButtonAdd>          
        </Form>
    )
}

export default ContactForm;
