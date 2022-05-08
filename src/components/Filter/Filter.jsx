import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { useDispatch, useSelector } from "react-redux";
import {changeFilter} from '../../redux/contacts-actions'

const Filter = ()  => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.contacts.filter);
   return (
     <label htmlFor=""> Find contact by name
       <input
         className={styles.filter_input}
         type="text"   
         value={filterValue}
         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
         required
        onChange={(change) => dispatch(changeFilter(change))}/>
     </label>
   );
 };
 
Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default Filter;
