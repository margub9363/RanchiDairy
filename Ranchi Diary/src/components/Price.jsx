import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { getPriceFetch } from "../store";
const Price = () => {
  const pricesFromStore = useSelector((store) => store.customerReducer);
  const pricesAvailalbeInStore = pricesFromStore.prices;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPriceFetch());
  }, [dispatch]);
  return (
    <>
      Update the Prices
      <div>
        <div className="input-group mb-3">
          <span
            className="input-group-text subscription-field-width"
            id="inputGroup-sizing-default"
          >
            Egg / pcs
          </span>
          <input
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={pricesAvailalbeInStore.egg}
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
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={pricesAvailalbeInStore.paneer}
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
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={pricesAvailalbeInStore.milk}
          />
        </div>
      </div>
      <Button variant="success">Update</Button>{" "}
    </>
  );
};

export default Price;
