import { createAction } from '@reduxjs/toolkit';

const setCurrentContact = createAction('contacts/currentContact');

const resetContactsState = createAction('contacts/resetContactState');

export { setCurrentContact, resetContactsState };
