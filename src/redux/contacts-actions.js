import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', newContact => {
  return {
    payload: {
      ...newContact,
      id: nanoid(),
    },
  };
});

export const deleteContact = createAction('contacts/delete');
export const changeFilter = createAction('contacts/ changeFilter', event => {
  return {
    payload: event.target.value,
  };
});