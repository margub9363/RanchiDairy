import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "../css/Customer.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fectchSpecificCustomerInfo } from "../store";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fectchSpecificCustomerInfo());
  }, [dispatch]);

  const customerDetailFromStore = useSelector((store) => store.customerReducer);
  const customerDetails = customerDetailFromStore.customerProfile;
  console.log(customerDetails);

  return (
    <span>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="../../public/profilePic/Rahman.png" thumbnail />
          </Col>
        </Row>
      </Container>
      <span>
        <Form
          noValidate
          // validated={validated} onSubmit={handleSubmit}
        >
          <Row className="mb-3 no-change">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustomUsername"
              className="test"
            >
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
              <Form.Label className="no-change">Contact No</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                value={customerDetails.contact_no}
              />
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
          </Row>
        </Form>
      </span>
    </span>
  );
};

export default Profile;

//  <>
//       {/* On the right side i will display the profile pic */}
// Name : Rahman
// <br /> Address: Firdous Nagar , Manitola, Doranda Ranchi
// <br /> Contact: 6203170200
// <br /> Alternate Contact : 6203170200
//     </>
