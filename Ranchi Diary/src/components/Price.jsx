import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPriceFetch, udpatePrices } from "../store";
import Button from "react-bootstrap/Button";

const Price = () => {
  const dispatch = useDispatch();
  const pricesFromStore = useSelector((store) => store.customerReducer);
  const pricesAvailalbeInStore = pricesFromStore.prices;

  const submitFormHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    dispatch(udpatePrices(data));
  };

  return (
    <div style={{ margin: "5px", width: "20%" }}>
      <div className="input-group mb-3">
        <span
          className="input-group-text subscription-field-width"
          id="inputGroup-sizing-default"
        >
          Egg / piece
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          placeholder={pricesAvailalbeInStore.egg}
        />
      </div>
      <div className="input-group mb-3">
        <span
          className="input-group-text subscription-field-width"
          id="inputGroup-sizing-default"
        >
          Paneer / kg
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          placeholder={pricesAvailalbeInStore.paneer}
        />
      </div>
      <div className="input-group mb-3">
        <span
          className="input-group-text subscription-field-width"
          id="inputGroup-sizing-default"
        >
          Milk / lit
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          placeholder={pricesAvailalbeInStore.milk}
        />
      </div>
      <Button variant="success">Update Price</Button>{" "}
    </div>
  );
};

export default Price;
