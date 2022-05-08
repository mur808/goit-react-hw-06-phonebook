import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {deleteContact} from '../../redux/contacts-actions'

const filterContact = (items, filter) => {
  return items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const newItems = filterContact(items, filter);
   return (
     <ul>
       {newItems.map(({ name, id, number }) => (
      <li key={id}>
         {name} : {number}
         <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
      </li>
       ))}
     </ul>
   );
 };
 
 export default ContactList;