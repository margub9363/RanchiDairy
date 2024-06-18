import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNextAvailableID, getRegisterFetch } from "../store";

function SignUpForm() {
  const [validated, setValidated] = useState(false);

  const customerDetailFromStore = useSelector((store) => store.customerReducer);
  const nextAvailableID = customerDetailFromStore.nextAvailableId;

  const dispatch = useDispatch();
  // useEffect(() => { // we dont need nexxt available id for now
  //   dispatch(fetchNextAvailableID());
  // }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target.name.value);
    console.log(nextAvailableID);
    const userInfo = {
      username: event.target.userName.value,
      password: event.target.password.value,
      name: event.target.name.value,
      number: event.target.contactNo.value,
      address: event.target.address.value,
    };
    dispatch(getRegisterFetch(userInfo));
  };

  return (
    <div style={{ margin: "10px" }}>
      <h1>Welcome To Ranchi Diary Sign Up Form</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <div>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label htmlFor="userName">User Name</Form.Label>
              <Form.Control required type="text" id="userName" />
            </Form.Group>
          </div>
          <div>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control required type="password" id="password" />
            </Form.Group>
          </div>
          <div>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name"
                defaultValue="ld"
                id="name"
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label htmlFor="contactNo">Contact No</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Contact No"
                defaultValue="Otto"
                id="contactNo"
              />
            </Form.Group>
          </div>
        </Row>
        <Row className="mb-3">
          <div>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label htmlFor="address">Address</Form.Label>
              {/* <Form.Control type="textarea" placeholder="Address" required /> */}
              <br />
              <textarea cols="31" rows="3" id="address" />
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
