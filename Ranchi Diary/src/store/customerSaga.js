import { takeEvery, put, call } from "redux-saga/effects";
import {
  getCustomersListSuccess,
  getNextAvailableIdSuccess,
  getSpecificCustomerInfoSuccess,
} from ".";
// import { ADD_TO_CART, PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

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

  //   yield takeEvery(ADD_TO_CART, testCart);
}
export default customerSaga;
