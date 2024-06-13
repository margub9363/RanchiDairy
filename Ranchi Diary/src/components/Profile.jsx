import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "../css/Customer.css";
// <<<<<<< FrontEndWork
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fectchSpecificCustomerInfo } from "../store";
// =======
import "./Profile.css";
// >>>>>>> PreRelease_12thJune

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fectchSpecificCustomerInfo());
  }, [dispatch]);

  const customerDetailFromStore = useSelector((store) => store.customerReducer);
  const customerDetails = customerDetailFromStore.customerProfile;
  console.log(customerDetails);

  return (
    <div className="main-div">
      <div className="form-data">
        <Form
          noValidate
          // validated={validated} onSubmit={handleSubmit}
        >
          <Row className="mb-3 no-change">
            <div>
              <Form.Group
                style={{ width: "80%" }}
                as={Col}
                md="4"
                controlId="validationCustomUsername"
              >
                <Form.Label>User Id</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">Cus-</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                </InputGroup>
              </Form.Group>
            </div>
            <div>
              <Form.Group
                style={{ width: "80%" }}
                as={Col}
                md="4"
                controlId="validationCustom01"
              >
                <Form.Label className="no-change">Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  defaultValue="Mark"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </div>
            <Form.Group
              style={{ width: "80%" }}
              as={Col}
              md="4"
              controlId="validationCustom01"
            >
// <<<<<<< FrontEndWork
              <Form.Label>User Id</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">CUS-</InputGroup.Text>
                <Form.Control
                  type="text"
                  aria-describedby="inputGroupPrepend"
                  value={customerDetails.id}
                  required
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label className="no-change">Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                value={customerDetails.name}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
// =======
// >>>>>>> PreRelease_12thJune
              <Form.Label className="no-change">Contact No</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                value={customerDetails.contact_no}
              />
// <<<<<<< FrontEndWork
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label className="no-change">Address</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                value={customerDetails.address}
              />
            </Form.Group>
// =======
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <div>
              <Form.Group
                style={{ width: "80%" }}
                as={Col}
                md="6"
                controlId="validationCustom03"
              >
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div>
              <Form.Group
                style={{ width: "80%" }}
                as={Col}
                md="3"
                controlId="validationCustom04"
              >
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div>
              <Form.Group
                as={Col}
                md="3"
                style={{ width: "80%" }}
                controlId="validationCustom05"
              >
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" placeholder="Zip" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
// >>>>>>> PreRelease_12thJune
          </Row>
        </Form>
      </div>
      <div>
        <img
          className="image-decoration"
          src="../../public/profilePic/Rahman.png"
        />
      </div>
    </div>
  );
};

export default Profile;
