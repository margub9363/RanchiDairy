import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useSelector } from "react-redux";

const Customers = () => {
  const customerDetailFromStore = useSelector((store) => store.customerReducer);
  const customerListArray = customerDetailFromStore.customerListArray;
  // console.log(customerListArray);

  return (
    <>
      <h1>Customer Data</h1>
      <div>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">User Id</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">
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
                <td>{item.dueAmount}</td>
                <td>{item.contactNo}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Customers;
