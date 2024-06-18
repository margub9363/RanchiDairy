import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
const AnimalFood = () => {
  return (
    <>
      <div style={{ margin: "5px" }}>
        <div style={{ width: "50%" }}>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm" style={{ width: "50%" }}>
              Vendor Id
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
                <th scope="col">Vendor Id</th>
                <th scope="col">Name</th>
                <th scope="col">Payment Due</th>
                <th scope="col">Contact No</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
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
      </div>
    </>
  );
};

export default AnimalFood;
