import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import TractorServiceSubmitForm from "./TractorServiceSubmitForm";

const Tractor = () => {
  return (
    <>
      This Page displays information about the no of times the Tractor service
      was used for waste management activities.
      <div>
        <TractorServiceSubmitForm />
      </div>
      <div>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">
            Tractor Id
          </InputGroup.Text>
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
              <th scope="col">Tractor Id</th>
              <th scope="col">Name</th>
              <th scope="col">Contact No</th>
              <th scope="col">Date</th>
              <th scope="col">Due Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>sd</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tractor;
