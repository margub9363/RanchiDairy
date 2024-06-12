import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const NotificatonCard = (message) => {
  console.log(message.props);
  return (
    <div style={{ margin: "5px" }}>
      <Card>
        <Card.Header as="h5">{message.props.title}</Card.Header>
        <Card.Body>
          <Card.Text>{message.props.message}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NotificatonCard;
