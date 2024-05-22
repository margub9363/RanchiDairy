import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import img from "../../public/profilePic/Rahman.png";

const Profile = () => {
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
        Name : Rahman
        <br /> Address: Firdous Nagar , Manitola, Doranda Ranchi
        <br /> Contact: 6203170200
        <br /> Alternate Contact : 6203170200
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
