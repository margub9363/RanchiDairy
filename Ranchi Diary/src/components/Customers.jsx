import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch, useSelector } from "react-redux";
import { getCustomersListFetch } from "../store";

const Customers = () => {
  const customerDetailFromStore = useSelector((store) => store.customerReducer);
  const customerListArray = customerDetailFromStore.customerListArray;

  const jwtToken = useSelector(
    (store) => store.customerReducer.loggedInUserDetail.jwtToken
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCustomersListFetch(jwtToken));
  }, [dispatch]);

  return (
    <div style={{ margin: "5px" }}>
      <h1>Customer Data</h1>
      <div style={{ width: "50%" }}>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "50%" }}>
            User Id
          </InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "50%" }}>
            Name
          </InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "50%" }}>
            Payment Due More Than
          </InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <button type="button" className="btn btn-primary btn-sm">
          Search
        </button>
      </div>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">User Id</th>
              <th scope="col">Name</th>
              <th scope="col">Payment Due</th>
              <th scope="col">Contact No</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {customerListArray.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.due_amount}</td>
                <td>{item.contact_no}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
