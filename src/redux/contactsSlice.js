import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  // Додаємо обробку зовнішніх екшенів
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)

      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected)
      
      .addCase(fetchContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.contacts = action.payload;
          })
      .addCase(addContact.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.error = null;
            state.contacts.push(action.payload);
        //  return [...state.contacts, action.payload];
          })
      .addCase(deleteContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const index = state.contacts.findIndex(
            contact => contact.id === action.payload.id
            );
            state.contacts.splice(index, 1);
          })
  // {
  //   [fetchContacts.pending]: handlePending,
  //   [addContact.pending]: handlePending,
  //   [deleteContact.pending]: handlePending,

  //   [fetchContacts.rejected]: handleRejected,
  //   [addContact.rejected]: handleRejected,
  //   [deleteContact.rejected]: handleRejected,

  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.contacts = action.payload;
  //   },
  //   [addContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.contacts.push(action.payload);
  //     // return [...state.contacts, action.payload];
  //   },
  //   [deleteContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.contacts.findIndex(
  //       contact => contact.id === action.payload.id
  //     );
  //     state.contacts.splice(index, 1);
  //   },
  // },
});

// Експортуємо генератори екшенів та редюсер
// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;

export const contactsReducer = contactsSlice.reducer;
