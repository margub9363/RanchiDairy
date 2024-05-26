import { configureStore, createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customersListName",
  initialState: {
    customerListArray: [
      {
        id: 1,
        name: "initial 0",
        address: "initial address",
        contactNo: 12345,
        dueAmount: 12.345,
      },
      {
        id: 2,
        name: "initial 1",
        address: "initial address",
        contactNo: 12345,
        dueAmount: 12.345,
      },
      {
        id: 3,
        name: "initial 2",
        address: "initial address",
        contactNo: 12345,
        dueAmount: 12.345,
      },
    ],
  },
  reducers: {
    addCustomer: (action, state) => {},
    removeCustomer: (action, state) => {},
    getCustomersList: (action, state) => {
      console.log(action, state);
    },
  },
});

const ranchiDiaryStore = configureStore({
  reducer: {
    customerReducer: customerSlice.reducer,
  },
});

export const coustomerActions = customerSlice.actions;
export default ranchiDiaryStore;
