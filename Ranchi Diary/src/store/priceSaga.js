import { takeEvery, put, call } from "redux-saga/effects";
import { getpricesSuccess } from ".";
// import { ADD_TO_CART, PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

function* getPriceFromBackend() {
  console.log("getPriceFromBackend******");
  const data = yield call(() => fetch("http://localhost:8083/price/getPrices"));
  const formattedData = yield data.json();
  console.log("------------");
  console.log(formattedData);
  yield put(getpricesSuccess(formattedData));
  //   yield put({ type: SET_PRODUCT_LIST, data });
}

function* priceSaga() {
  console.log("***********PPPPPPPPPPPPPPPPPP");
  yield takeEvery("customersListName/getPriceFetch", getPriceFromBackend);
}
export default priceSaga;
