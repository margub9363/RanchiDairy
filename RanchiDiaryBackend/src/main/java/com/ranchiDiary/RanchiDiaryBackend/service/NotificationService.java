package com.ranchiDiary.RanchiDiaryBackend.service;

import com.ranchiDiary.RanchiDiaryBackend.entity.Notification;
import com.ranchiDiary.RanchiDiaryBackend.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
