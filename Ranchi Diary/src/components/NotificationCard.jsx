import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { markNotificationAsRead } from "../store";

const NotificatonCard = (props) => {
  const jwtToken = useSelector(
    (store) => store.customerReducer.loggedInUserDetail.jwtToken
  );
  const dispatch = useDispatch();
  const clickHandler = (data) => {
    console.log(props.id);
    const dataToDispatch = {
      userName: props.userName,
      notificationId: props.id,
      jwtToken: jwtToken,
    };

    console.log(dataToDispatch);
    dispatch(markNotificationAsRead(dataToDispatch));
  };
  return (
    <div style={{ margin: "5px" }}>
      <Card>
        <Card.Header as="h5">{props.title}</Card.Header>
        <Card.Body>
          <Card.Text>{props.message}</Card.Text>
          <Button variant="primary" onClick={() => clickHandler(props)}>
            Mark As read
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NotificatonCard;
