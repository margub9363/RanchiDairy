import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  getCustomersListSuccess,
  getNextAvailableIdSuccess,
  getSpecificCustomerInfoSuccess,
  updatingJwtAndRole,
  getUnreadNotificationsFetch,
  getUnreadNotificationsSuccess,
} from ".";

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
  console.log("+++++++getAllCustomers++++++++++");
  const data = yield call(() =>
    fetch("http://localhost:8083/customer/getAllCustomers")
  );
  const formattedData = yield data.json();
  yield put(getCustomersListSuccess(formattedData));
}

function* getCustomerInfoViaBackend() {
  console.log("+++++++++getCustomerInfoViaBackend++++++++++");
  const data = yield call(() =>
    fetch("http://localhost:8083/customer/getCustomerRecord/8")
  );
  const formattedData = yield data.json();
  console.log(formattedData);
  yield put(getSpecificCustomerInfoSuccess(formattedData));
}

function* fetchNextAvailableIdForSignUp() {
  console.log("+++++++++fetchNextAvailableIdForSignUp++++++++++");
  const data = yield call(() => fetch("http://localhost:8083/customer/nextID"));
  const formattedData = yield data.json();
  yield put(getNextAvailableIdSuccess(formattedData));
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

function* sendUserDataToRegister(payload) {
  console.log("sendUserDataToRegister++++++++++");
  console.log(payload);
  try {
    const registringCredStatus = yield call(
      axios.post,
      "http://localhost:8083/register",
      payload.payload
    );
    const logginInWithNewCreds = yield call(
      axios.post,
      "http://localhost:8083/authenticate",
      payload.payload
    );
    const currentUserJwtToken = logginInWithNewCreds.data.jwt;
    console.log(currentUserJwtToken);

    function apiCall(payload, currentUserJwtToken) {
      axios.post(
        "http://localhost:8083/customer/insertCustomerRecord",
        payload.payload,
        {
          headers: {
            Authorization: `Bearer ${currentUserJwtToken}`,
            "Content-Type": "application/json",
          },
        }
      );
    }
    const insertRecordInCustomerDb = yield call(
      apiCall,
      payload,
      currentUserJwtToken
    );
    console.log(insertRecordInCustomerDb);
  } catch (error) {
    console.log("ERRR");
    console.log(error);
  }
  // yield put(getUnreadNotificationsFetch(payload.payload.customerId));
  //   yield put({ type: SET_PRODUCT_LIST, data });
}

function* testCart() {
  // let data
  console.log("++++++++Call api here -> test cart");
}

function* customerSaga() {
  console.log("+++++customerSaga+++++++++");
  yield takeEvery("customersListName/getCustomersListFetch", getAllCustomers);
  yield takeEvery(
    "customersListName/fectchSpecificCustomerInfo",
    getCustomerInfoViaBackend
  );
  yield takeEvery(
    "customersListName/fetchNextAvailableID",
    fetchNextAvailableIdForSignUp
  );
  yield takeEvery("customersListName/loggingIn", getJwtTokenAndRole);
  yield takeEvery(
    "customersListName/getUnreadNotificationsFetch",
    getUnreadNotifications
  );
  yield takeEvery(
    "customersListName/markNotificationAsRead",
    updateBackendThisNotificationIsRead
  );

  yield takeEvery("customersListName/getRegisterFetch", sendUserDataToRegister);

  //   yield takeEvery(ADD_TO_CART, testCart);
}

export default customerSaga;
