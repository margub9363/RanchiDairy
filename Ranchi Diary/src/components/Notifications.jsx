import { useDispatch, useSelector } from "react-redux";
import NotificatonCard from "./NotificationCard";
import { getUnreadNotificationsFetch } from "../store";
import { useEffect } from "react";

const NotificationWindow = () => {
  const userName = useSelector(
    (store) => store.customerReducer.customerProfile.username
  );
  const unReadNotificationMessages = useSelector(
    (store) => store.customerReducer.customerProfile.notificationMessages
  );

  const jwtToken = useSelector(
    (store) => store.customerReducer.loggedInUserDetail.jwtToken
  );

  const dispatch = useDispatch();
  const notficationPayload = {
    userName: userName,
    jwtToken: jwtToken,
  };
  useEffect(() => {
    dispatch(getUnreadNotificationsFetch(notficationPayload));
  }, []);

  return (
    <>
      This pages will show the unread notifications.
      {unReadNotificationMessages.map((message) => (
        <NotificatonCard
          message={message.message}
          title={message.title}
          key={message.id}
          id={message.id}
          userName={userName}
        />
      ))}
    </>
  );
};

export default NotificationWindow;
