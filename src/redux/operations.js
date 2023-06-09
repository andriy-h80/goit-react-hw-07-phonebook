import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6482455929fa1c5c5032c8a6.mockapi.io";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    // Використовуємо символ підкреслення як ім'я першого параметра,
    // тому що в цій операції він нам не потрібен
    async (_, thunkAPI) => {
        try {
        const response = await axios.get("/contacts");
      // При успішному запиті повертаємо проміс із даними
        return response.data;
        } catch (error) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({ id, name, phone }, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", { id, name, phone });
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);
