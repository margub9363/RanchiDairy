import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  getCustomersListSuccess,
  updatingJwtAndRole,
  getUnreadNotificationsFetch,
  getUnreadNotificationsSuccess,
} from ".";
// import { ADD_TO_CART, PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

function* getJwtTokenAndRole(data) {
  console.log(data.payload);
  const output = yield call(
    axios.post,
    "http://localhost:8083/authenticate",
    data.payload
  );
  console.log(output.data);
  yield put(updatingJwtAndRole(output.data));
}

function* getAllCustomers() {
  console.log("getAllCustomers++++++++++");
  const data = yield call(() =>
    fetch("http://localhost:8083/customer/getAllCustomers")
  );
  const formattedData = yield data.json();
  console.log("------------");
  console.log(formattedData);
  yield put(getCustomersListSuccess(formattedData));
  //   yield put({ type: SET_PRODUCT_LIST, data });
}

function* getUnreadNotifications(customerId) {
  console.log("getUnreadNotifications++++++++++");
  const data = yield call(() =>
    fetch(
      `http://localhost:8083/customer/getUnreadNotification/${customerId.payload}`
    )
  );
  const formattedData = yield data.json();
  console.log("------------");
  console.log(formattedData);
  yield put(getUnreadNotificationsSuccess(formattedData));
  //   yield put({ type: SET_PRODUCT_LIST, data });
}

function* updateBackendThisNotificationIsRead(payload) {
  console.log("updateBackendThatThisNotificationIsRead++++++++++");
  const data = yield call(() =>
    fetch(
      `http://localhost:8083/customer/markNotificationRead/${payload.payload.customerId}/${payload.payload.notificationId}`
    )
  );
  yield put(getUnreadNotificationsFetch(payload.payload.customerId));
  //   yield put({ type: SET_PRODUCT_LIST, data });
}

function* testCart() {
  // let data
  console.log("Call api here -> test cart");
}

function* customerSaga() {
  console.log("********customerSaga*********");
  yield takeEvery("customersListName/getCustomersListFetch", getAllCustomers);
  yield takeEvery("customersListName/loggingIn", getJwtTokenAndRole);
  yield takeEvery(
    "customersListName/getUnreadNotificationsFetch",
    getUnreadNotifications
  );
  yield takeEvery(
    "customersListName/markNotificationAsRead",
    updateBackendThisNotificationIsRead
  );

  //   yield takeEvery(ADD_TO_CART, testCart);
}

export default customerSaga;
