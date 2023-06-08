import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
import initialContacts from '../contacts.json';

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        // return [...state, action.payload];
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(3),
          },
        };
      },
    },
    deleteContact(state, action) {
      const id = action.payload;
      return state.filter((contact) => contact.id !== id);
    },
  },
});
// Експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
