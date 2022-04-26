import React from 'react';
import styles from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ contact, onDelete }) => {
  return (
    <li key={contact.id} className={styles.list_item}>
      <span>
        {contact.name} {contact.number}
      </span>
      <button
        className={styles.list_btn}
        type="button"
        onClick={() => {
          onDelete(contact);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;


ContactItem.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};