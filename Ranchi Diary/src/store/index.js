import { configureStore, createSlice } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const saga = createSagaMiddleware();

const customerSlice = createSlice({
  name: "customersListName",
  initialState: {
    nextAvailableId: -1,
    customerProfile: {
      id: 0,
      name: "Default",
      contact_no: 0,
      due_amount: 0.0,
      address: "abc def xyz",
      registration_date: "2020-01-01T05:59:52.000+00:00",
      notifications_read: "1 2 3",
      username: "default",
    },
    loggedInUserDetail: {
      jwtToken: null,
      role: "CUSTOMER",
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
      name: "Dummy",
      ROLE: "CUSTOMER",
      contact_no: 0,
      due_amount: 123.456,
      address: "Dummy",
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
      console.log(state.initialState);
      console.log(action);
    },
    loggingIn: (state, action) => {
      console.log(action);
    },
    updatingJwtAndRole: (state, action) => {
      console.log(action);
      state.loggedInUserDetail.jwtToken = action.payload.jwt;
      state.loggedInUserDetail.role = action.payload.role;
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

    fectchSpecificCustomerInfo: (state, action) => {
      console.log("******fectchSpecificCustomerInfo****");
      state.isLoading = true;
    },
    getSpecificCustomerInfoSuccess: (state, action) => {
      state.customerProfile = action.payload;
      state.isLoading = false;
    },
    fetchNextAvailableID: (state) => {
      console.log("********fetchNextAvailableID*********");
      state.isLoading = true;
    },
    getNextAvailableIdSuccess: (state, action) => {
      console.log("*******getNextAvailableIdSuccess*********");
      state.nextAvailableId = action.payload;
      state.isLoading = false;
    },
    getRegisterFetch: (state, action) => {
      console.log("*******getRegisterFetch*********");
      state.isLoading = true;
    },
    getCustomerDataFetch: (state, action) => {
      console.log("*******getCustomerDataFetch********");
    },
    updateCustomerInfoAfterLoggin(state, action) {
      console.log("*******updateCustomerInfoAfterLoggin*********");
      console.log(action);
      state.customerProfile.id = action.payload.id;
      state.customerProfile.name = action.payload.name;
      state.customerProfile.address = action.payload.address;
      state.customerProfile.contact_no = action.payload.contact_no;
      state.customerProfile.due_amount = action.payload.due_amount;
      state.customerProfile.registration_date =
        action.payload.registration_date;
      state.customerProfile.username = action.payload.username;
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
  fectchSpecificCustomerInfo,
  getSpecificCustomerInfoSuccess,
  fetchNextAvailableID,
  getNextAvailableIdSuccess,
  loggingIn,
  updatingJwtAndRole,
  logoutFunctionality,
  getUnreadNotificationsFetch,
  getUnreadNotificationsSuccess,
  markNotificationAsRead,
  getRegisterFetch,
  getCustomerDataFetch,
  updateCustomerInfoAfterLoggin,
} = customerSlice.actions;

export default ranchiDiaryStore;
