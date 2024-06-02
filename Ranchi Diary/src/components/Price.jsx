import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPriceFetch, udpatePrices } from "../store";

const Price = () => {
  const pricesFromStore = useSelector((store) => store.customerReducer);
  const pricesAvailalbeInStore = pricesFromStore.prices;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPriceFetch());
  }, [dispatch]);

  const submitFormHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    dispatch(udpatePrices(data));
  };

  return (
    <>
      Update Prices
      <form onSubmit={submitFormHandler}>
        <div className="mb-3">
          <label htmlFor="eggPrice" className="form-label">
            Egg / pc
          </label>
          <input
            type="number"
            className="form-control"
            id="eggPrice"
            name="eggPrice"
            aria-describedby="emailHelp"
            defaultValue={pricesAvailalbeInStore.egg}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="milkPrice" className="form-label">
            Milk / lit
          </label>
          <input
            type="number"
            className="form-control"
            id="milkPrice"
            name="milkPrice"
            aria-describedby="emailHelp"
            defaultValue={pricesAvailalbeInStore.milk}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="paneerPrice" className="form-label">
            Paneer / kg
          </label>
          <input
            type="number"
            className="form-control"
            id="paneerPrice"
            name="paneerPrice"
            aria-describedby="emailHelp"
            defaultValue={pricesAvailalbeInStore.paneer}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Price;
