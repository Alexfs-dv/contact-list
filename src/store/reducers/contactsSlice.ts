import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
  group: string;
  note: string;
}

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: JSON.parse(localStorage.getItem('contacts') || '[]'),
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
        localStorage.setItem('contacts', JSON.stringify(state.contacts));
      }
    },
  },
});

export const { addContact, deleteContact, updateContact } = contactsSlice.actions;

export default contactsSlice.reducer;
