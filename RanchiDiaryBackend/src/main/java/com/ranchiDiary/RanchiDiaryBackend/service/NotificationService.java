package com.ranchiDiary.RanchiDiaryBackend.service;

import com.ranchiDiary.RanchiDiaryBackend.entity.Notification;
import com.ranchiDiary.RanchiDiaryBackend.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    public void updateNotificationInDb(String message) {
        notificationRepository.save(new Notification().builder().message(message).build());
    }
    public java.util.Optional<Notification> firstNotification() {
        return notificationRepository.findById(1);
    }

    public List<Integer> getTheListOfNotificationsIdAfterTheGivenDate(Date customerRegistrationDate) {
        List<Notification> byNotificationDateAfter = notificationRepository.findByNotificationDateAfter(customerRegistrationDate);
        List<Integer> collect = byNotificationDateAfter.stream().map(notification -> notification.getId()).collect(Collectors.toList());
        return collect;
    }

    public List<String>  listOfNotificationMessagesForTheGiveIds(List<Integer> id) {
        List<String> notificationsMessage = new ArrayList<>();
        id.stream().forEach(notificationId -> notificationRepository.findById(notificationId).ifPresent(x-> notificationsMessage.add(x.getMessage())));
        return notificationsMessage;
    }
}
