package com.ranchiDiary.RanchiDiaryBackend.converter;

import com.ranchiDiary.RanchiDiaryBackend.entity.Notification;
import com.ranchiDiary.RanchiDiaryBackend.pojo.NotificationPojo;
import com.ranchiDiary.RanchiDiaryBackend.pojo.Price;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class NotificationEntityToNotificationJsonConverter {

    public NotificationPojo convert(Notification notificationEntity) {
        NotificationPojo notificationPojo = new NotificationPojo();
        notificationPojo.setId(notificationEntity.getId());
        notificationPojo.setTitle(notificationEntity.getTitle());
        notificationPojo.setMessage(notificationEntity.getMessage());
        return notificationPojo;
    }
}
