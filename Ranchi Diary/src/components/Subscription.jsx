import Button from "react-bootstrap/Button";
import Payment from "./Payment";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
const Subscription = () => {
  const pricesFromStore = useSelector((store) => store.customerReducer);
  const pricesAvailalbeInStore = pricesFromStore.prices;

  let eggInputRef = useRef();
  let milkInputRef = useRef();
  let paneerInputRef = useRef();
  let billedAmountRef = useRef();

  const priceCalculatorHandler = (e) => {
    billedAmountRef.current.value =
      eggInputRef.current.value * pricesAvailalbeInStore.egg +
      milkInputRef.current.value * pricesAvailalbeInStore.milk +
      paneerInputRef.current.value * pricesAvailalbeInStore.paneer;
  };
  return (
    <>
      <div>
        <div className="input-group mb-3">
          <span
            className="input-group-text subscription-field-width"
            id="inputGroup-sizing-default"
          >
            Egg
          </span>
          <input
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            defaultValue="0"
            onChange={priceCalculatorHandler}
            ref={eggInputRef}
          />
        </div>
        <div className="input-group mb-3">
          <span
            className="input-group-text subscription-field-width"
            id="inputGroup-sizing-default"
          >
            Paneer
          </span>
          <input
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            defaultValue="0"
            onChange={priceCalculatorHandler}
            ref={paneerInputRef}
          />
        </div>
        <div className="input-group mb-3">
          <span
            className="input-group-text subscription-field-width"
            id="inputGroup-sizing-default"
          >
            Milk
          </span>
          <input
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            defaultValue="0"
            onChange={priceCalculatorHandler}
            ref={milkInputRef}
          />
        </div>
        {/*  */}
        <div className="input-group mb-3">
          <span
            className="input-group-text subscription-field-width"
            id="inputGroup-sizing-default"
          >
            Timing
          </span>
          <div className="form-check form-check-inline subscription-timing-margin">
            <input
              className="form-check-input subscription-timing-margin"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              Morning 7:30 Am - 9:30 Am
            </label>
          </div>
          <div className="form-check form-check-inline subscription-timing-margin">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              Evening 6:30 Pm to 8:30 Pm
            </label>
          </div>
        </div>
        <div className="input-group mb-3">
          <span
            className="input-group-text subscription-field-width"
            id="inputGroup-sizing-default"
          >
            Bill Amount
          </span>
          <input
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            // value={billedAmount.egg}
            ref={billedAmountRef}
          />
        </div>
        <Button variant="success">Submit</Button>{" "}
      </div>
      <div>
        <Payment />
      </div>
    </>
  );
};
export default Subscription;
