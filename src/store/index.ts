import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './reducers/contactsSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
