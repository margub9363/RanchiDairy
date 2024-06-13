import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNextAvailableID } from "../store";

function SignUpForm() {
  const [validated, setValidated] = useState(false);

  const customerDetailFromStore = useSelector((store) => store.customerReducer);
  const nextAvailableID = customerDetailFromStore.nextAvailableId;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNextAvailableID());
  }, [dispatch]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div style={{ margin: "10px" }}>
      <h1>Welcome To Ranchi Diary Sign Up Form</h1>

      Customer ID : <input value={nextAvailableID} />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>

        <Row className="mb-3">
          <div>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>User Id</Form.Label>
              <Form.Control required type="text" value="1" />
            </Form.Group>
          </div>
          <div>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name"
                defaultValue="ld"
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Contact No</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Contact No"
                defaultValue="Otto"
              />
            </Form.Group>
          </div>
        </Row>
        <Row className="mb-3">
          <div>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Address</Form.Label>
              {/* <Form.Control type="textarea" placeholder="Address" required /> */}
              <br />
              <textarea cols="31" rows="3" />
            </Form.Group>
          </div>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit" style={{ width: "200px" }}>
          Submit form
        </Button>
      </Form>
      <Link to="/home">
        <Button
          style={{ width: "200px", marginLeft: "30%", marginTop: "10px" }}
          variant="danger"
        >
          Cancel SignUp
        </Button>{" "}
      </Link>
    </div>
  );
}

export default SignUpForm;
