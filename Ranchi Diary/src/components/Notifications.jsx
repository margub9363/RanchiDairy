import { useDispatch, useSelector } from "react-redux";
import NotificatonCard from "./NotificationCard";
import { getUnreadNotificationsFetch } from "../store";
import { useEffect } from "react";

const NotificationWindow = () => {
  const customerid = useSelector(
    (store) => store.customerReducer.loggedInUserDetail.id
  );
  const unReadNotificationMessages = useSelector(
    (store) => store.customerReducer.loggedInUserDetail.notificationMwssages
  );

  const dispatch = useDispatch();
  //   dispatch(getUnreadNotificationsFetch(customerid));
  useEffect(() => {
    dispatch(getUnreadNotificationsFetch(customerid));
  }, [customerid]);

  console.log("unReadNotificationMessages++++++++++++");
  console.log(unReadNotificationMessages);

  return (
    <>
      This pages will show the unread notifications.
      {unReadNotificationMessages.map((message) => (
        <NotificatonCard props={message} />
      ))}
    </>
  );
};

export default NotificationWindow;
