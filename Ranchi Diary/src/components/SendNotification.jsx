import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function SendNotification() {
  return (
    <div style={{ margin: "10px 10px" }}>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
        />
      </FloatingLabel>
      <Button variant="success" style={{ marginTop: "7px" }}>
        Send Notification
      </Button>{" "}
    </div>
  );
}

export default SendNotification;
