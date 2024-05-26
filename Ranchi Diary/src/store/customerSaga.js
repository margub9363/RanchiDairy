import { takeEvery, put, call } from "redux-saga/effects";
import { getCustomersListSuccess } from ".";
// import { ADD_TO_CART, PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

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

function* testCart() {
  // let data
  console.log("Call api here -> test cart");
}

function* customerSaga() {
  console.log("***********");
  yield takeEvery("customersListName/getCustomersListFetch", getAllCustomers);
  //   yield takeEvery(ADD_TO_CART, testCart);
}
export default customerSaga;
