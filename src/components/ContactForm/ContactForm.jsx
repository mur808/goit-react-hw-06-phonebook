import { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';
import { useDispatch , useSelector} from "react-redux";
import {addContact} from '../../redux/contacts-actions'

const ContactForm = ({ submit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items);

  const inputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  const submitForm = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(5),
      name,
      number,
    };
    // submit(newContact);
    // reset();
    console.log(newContact)
    if (items.find(contact =>contact.name.toLowerCase().includes(newContact.name.toLowerCase()))) {
      reset();
          return alert(`${newContact.name} is already in contacts`);
        }
    console.log(addContact(newContact))
    dispatch(addContact(newContact));
    reset();
  };

  return (
    <form onSubmit={submitForm} className={styles.form}>
      <label className={styles.form_label}>
        Name
        <input
          className={styles.form_input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={inputChange}
        />
      </label>
      <label className={styles.form_label}>
        Number
        <input
          className={styles.form_input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={inputChange}
        />
      </label>
      <button type="submit" className={styles.form_btn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

