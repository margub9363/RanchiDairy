import { all, call } from "redux-saga/effects";
import customerSaga from "./customerSaga";
import priceSaga from "./priceSaga";

function* rootSaga() {
  yield all([
    call(priceSaga),
    call(customerSaga),
    // Add other sagas here
  ]);
}

export default rootSaga;
