import { useDispatch, useSelector } from "react-redux";
import NotificatonCard from "./NotificationCard";
import { getUnreadNotificationsFetch } from "../store";
import { useEffect } from "react";

const NotificationWindow = () => {
  const customerId = useSelector(
    (store) => store.customerReducer.loggedInUserDetail.id
  );
  const unReadNotificationMessages = useSelector(
    (store) => store.customerReducer.loggedInUserDetail.notificationMwssages
  );

  const dispatch = useDispatch();
  //   dispatch(getUnreadNotificationsFetch(customerid));
  useEffect(() => {
    dispatch(getUnreadNotificationsFetch(customerId));
  }, []);

  console.log("unReadNotificationMessages++++++++++++");
  console.log(unReadNotificationMessages);

  return (
    <>
      This pages will show the unread notifications.
      {unReadNotificationMessages.map((message) => (
        <NotificatonCard
          message={message}
          customerId={customerId}
          key={message.id}
        />
      ))}
    </>
  );
};

export default NotificationWindow;
