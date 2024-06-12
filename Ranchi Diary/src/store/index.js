import { configureStore, createSlice } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import customerSaga from "./customerSaga";
import priceSaga from "./priceSaga";
import rootSaga from "./rootSaga";

const saga = createSagaMiddleware();

const customerSlice = createSlice({
  name: "customersListName",
  initialState: {
    loggedInUserDetail: {
      jwtToken: 1,
      id: 2,
      notificationMwssages: [
        {
          id: 1,
          title: "test",
          message: "asd",
        },
        {
          id: 6,
          title: "qwe",
          message: "sdfds",
        },
      ],
      name: "Tannu",
      ROLE: "CUSTOMER",
      contact_no: 9031790301,
      due_amount: 123.456,
      address: "Ranchi Jharkhand Ranchi 834002",
      unreadNotifications: "0",
    },
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
      egg: 10000,
      milk: 10000,
      paneer: 10000,
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
      console.log("*******getPriceFetch********");
    },
    getpricesSuccess: (state, action) => {
      state.prices = action.payload;
      state.isLoading = false;
    },
    udpatePrices: (state, action) => {
      console.log("*******udpatePrices********");
    },
    logoutFunctionality: (state, action) => {
      state.loggedInUserDetail.jwtToken = null;
    },
    getUnreadNotificationsFetch: (state, action) => {
      state.isLoading = true;
      console.log("*******getUnreadNotifications********");
    },
    getUnreadNotificationsSuccess: (state, action) => {
      state.loggedInUserDetail.notificationMwssages = action.payload;
    },
    markNotificationAsRead: (state, action) => {
      console.log("*******markNotificationAsRead********");
      console.log(action);
    },
  },
});

const ranchiDiaryStore = configureStore({
  reducer: {
    customerReducer: customerSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

saga.run(rootSaga);

export const {
  addCustomer,
  removeCustomer,
  getCustomersListFetch,
  getCustomersListSuccess,
  getPriceFetch,
  getpricesSuccess,
  udpatePrices,
  logoutFunctionality,
  getUnreadNotificationsFetch,
  getUnreadNotificationsSuccess,
  markNotificationAsRead,
} = customerSlice.actions;

export default ranchiDiaryStore;
