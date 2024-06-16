import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "../css/Customer.css";
import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fectchSpecificCustomerInfo } from "../store";
import "./Profile.css";

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
                    value={customerDetails.id}
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
                  value={customerDetails.name}
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
              <Form.Label className="no-change">Contact No</Form.Label>
              <Form.Control
                required
                type="text"
                value={customerDetails.contact_no}
              />
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
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" value={customerDetails.address} />
              </Form.Group>
            </div>
            <div>
              <Form.Group
                style={{ width: "80%" }}
                as={Col}
                md="3"
                controlId="validationCustom04"
              >
                <Form.Label>Registration Date</Form.Label>
                <Form.Control
                  type="text"
                  value={customerDetails.registration_date}
                />
              </Form.Group>
            </div>
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
