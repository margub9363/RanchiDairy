package com.ranchiDiary.RanchiDiaryBackend.controller;

import com.ranchiDiary.RanchiDiaryBackend.pojo.NotificationPojo;
import com.ranchiDiary.RanchiDiaryBackend.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Admin {

    @Autowired
    private NotificationService notificationService;

    @PostMapping("/sendNotification")
    public void sendNotifications(@RequestBody NotificationPojo request) {
        notificationService.updateNotificationInDb(request.getMessage());
    }
}
