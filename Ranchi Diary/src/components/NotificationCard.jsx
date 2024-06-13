import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { markNotificationAsRead } from "../store";

const NotificatonCard = (props) => {
  console.log(props);

  const dispatch = useDispatch();

  const clickHandler = (data) => {
    console.log(data);
    console.log(props.customerId);
    // dispatch(markNotificationAsRead(props.cutomerId, data.message.id));
    const dataToDispatch = {
      customerId: props.customerId,
      notificationId: data.id,
    };
    dispatch(markNotificationAsRead(dataToDispatch));
  };
  return (
    <div style={{ margin: "5px" }}>
      <Card>
        <Card.Header as="h5">{props.message.title}</Card.Header>
        <Card.Body>
          <Card.Text>{props.message.message}</Card.Text>
          <Button variant="primary" onClick={() => clickHandler(props.message)}>
            Mark As read
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NotificatonCard;
