import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  getCustomersListSuccess,
  getNextAvailableIdSuccess,
  getSpecificCustomerInfoSuccess,
  updatingJwtAndRole,
  getUnreadNotificationsFetch,
  getUnreadNotificationsSuccess,
  updateCustomerInfoAfterLoggin,
  getCustomerDataFetch,
} from ".";

function* getJwtTokenAndRole(data) {
  // console.log(data.payload);
  const output = yield call(
    axios.post,
    "http://localhost:8083/authenticate",
    data.payload
  );
  // console.log(output.data);
  const dataForGettingCustomerInfo = {
    currentUserJwtToken: output.data.jwt,
    username: data.payload.username,
  };
  yield put(updatingJwtAndRole(output.data));
  yield put(getCustomerDataFetch(dataForGettingCustomerInfo));
}

function* getAllCustomers(payload) {
  console.log("+++++++getAllCustomers++++++++++");
  console.log(payload);
  const getCustomerListApiCall = async (jwtToken) => {
    const response = await axios.get(
      `http://localhost:8083/customer/getAllCustomers`,
      // payload.payload,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  };
  const listOfCustomers = yield call(getCustomerListApiCall, payload.payload);
  yield put(getCustomersListSuccess(listOfCustomers));
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

function* getUnreadNotifications(payload) {
  console.log("getUnreadNotifications++++++++++");
  console.log(payload);
  const unReadNotificationsApiCall = async (jwtToken, customerUserName) => {
    const response = await axios.get(
      `http://localhost:8083/customer/getUnreadNotificationByUserName/${customerUserName}`,
      // payload.payload,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  };
  const unReadNotifications = yield call(
    unReadNotificationsApiCall,
    payload.payload.jwtToken,
    payload.payload.userName
  );
  yield put(getUnreadNotificationsSuccess(unReadNotifications));
  //   yield put({ type: SET_PRODUCT_LIST, data });
}

function* updateBackendThisNotificationIsRead(payload) {
  console.log("updateBackendThisNotificationIsRead++++++++++");
  console.log(payload);
  /*
  const data = yield call(() =>
    fetch(
      `http://localhost:8083/customer/markNotificationRead/${payload.payload.customerId}/${payload.payload.notificationId}`
    )
  );
  yield put(getUnreadNotificationsFetch(payload.payload.customerId));
  //   yield put({ type: SET_PRODUCT_LIST, data });
  */
  const updateBackendForReadNotifications = async (
    jwtToken,
    userName,
    notificationId
  ) => {
    const response = await axios.get(
      `http://localhost:8083/customer/markNotificationReadWithUserName/${userName}/${notificationId}`,
      // payload.payload,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  };
  const unReadNotifications = yield call(
    updateBackendForReadNotifications,
    payload.payload.jwtToken,
    payload.payload.userName,
    payload.payload.notificationId
  );
  const notficationPayload = {
    userName: payload.payload.userName,
    jwtToken: payload.payload.jwtToken,
  };
  yield put(getUnreadNotificationsFetch(notficationPayload));
}

function* sendUserDataToRegister(payload) {
  console.log("sendUserDataToRegister++++++++++");
  // console.log(payload);
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
    // console.log(currentUserJwtToken);

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
    // console.log(insertRecordInCustomerDb);
  } catch (error) {
    console.log("ERRR");
    // console.log(error);
  }
  // yield put(getUnreadNotificationsFetch(payload.payload.customerId));
  //   yield put({ type: SET_PRODUCT_LIST, data });
}

function* getCustomerDataWithUserId(payload) {
  console.log("++++++++++++payload+++++");
  const currentUserJwtToken = payload.payload.currentUserJwtToken;
  const userName = payload.payload.username;

  const fetchUser = async (userName, currentUserJwtToken) => {
    const response = await axios.get(
      `http://localhost:8083/customer/getCustomerRecordByUserName/${userName}`,
      // payload.payload,
      {
        headers: {
          Authorization: `Bearer ${currentUserJwtToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  };
  const user = yield call(fetchUser, userName, currentUserJwtToken);
  // console.log(user);
  yield put(updateCustomerInfoAfterLoggin(user));
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
  yield takeEvery(
    "customersListName/getCustomerDataFetch",
    getCustomerDataWithUserId
  );

  //   yield takeEvery(ADD_TO_CART, testCart);
}

export default customerSaga;
