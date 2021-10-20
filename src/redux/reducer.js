import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { defaultContacts } from '../defaultContacts/DefaultContacts';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  filterContact,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts/actions';

const contactsReducer = createReducer(
  JSON.parse(window.localStorage.getItem('contacts')) ?? defaultContacts,
  {
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) =>
      state.filter(contact => {
        return contact.id !== payload;
      }),
  },
);

const filterReducer = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading,
});
