import { configureStore, createSlice } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import customerSaga from "./customerSaga";
import priceSaga from "./priceSaga";

const saga = createSagaMiddleware();

const customerSlice = createSlice({
  name: "customersListName",
  initialState: {
    customerListArray: [
      {
        id: 1,
        name: "initial 0",
        address: "initial address",
        contact_no: 12345,
        due_amount: 12.345,
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
    prices: {
      id: 1,
      egg: 10,
      milk: 40,
      paneer: 50,
    },
    isLoading: false,
  },
  reducers: {
    addCustomer: (action, state) => {},
    removeCustomer: (action, state) => {},
    getCustomersListFetch: (state) => {
      state.isLoading = true;
      console.log(state);
    },
    getCustomersListSuccess: (state, action) => {
      state.customerListArray = action.payload;
      state.isLoading = false;
    },
    getCustomersListFailure: (state) => {
      state.isLoading = false;
    },
    getPriceFetch: (state) => {
      state.isLoading = true;
      console.log(state);
    },
    getpricesSuccess: (state, action) => {
      state.prices = action.payload;
    },
  },
});

const ranchiDiaryStore = configureStore({
  reducer: {
    customerReducer: customerSlice.reducer,
  },
  middleware: () => [saga],
});

saga.run(customerSaga);
saga.run(priceSaga);

export const {
  addCustomer,
  removeCustomer,
  getCustomersListFetch,
  getCustomersListSuccess,
  getPriceFetch,
  getpricesSuccess,
} = customerSlice.actions;

export default ranchiDiaryStore;
