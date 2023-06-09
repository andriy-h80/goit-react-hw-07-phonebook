import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/operations";
import { selectContacts } from '../../redux/selectors';
import { Form, ButtonAdd } from './ContactForm.styled';

const ContactForm = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleSubmit = event => {
        event.preventDefault();
        const { name, phone } = event.currentTarget;

        const isContactExist = contacts.some(
            contact => contact.name.toLowerCase() === name.value.toLowerCase()
        );
        
        if (isContactExist) {
            alert(`${name.value} is already in contacts`);
            event.currentTarget.reset();
            return;
        }

        dispatch(addContact({name: name.value, phone: phone.value}));
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

            <label htmlFor="phone">
                Number: 
            </label>
            <input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" required
            id="phone"
            />  

            <ButtonAdd type='submit' aria-label="Add contact">Add contact</ButtonAdd>          
        </Form>
    )
}

export default ContactForm;
