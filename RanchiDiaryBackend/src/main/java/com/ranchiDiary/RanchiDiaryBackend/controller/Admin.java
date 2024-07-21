package com.ranchiDiary.RanchiDiaryBackend.controller;

import com.ranchiDiary.RanchiDiaryBackend.pojo.NotificationPojo;
import com.ranchiDiary.RanchiDiaryBackend.service.AsyncService;
import com.ranchiDiary.RanchiDiaryBackend.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalTime;

@RestController
public class Admin {

    @Autowired
    private NotificationService notificationService;

    @Autowired
    private AsyncService asyncService;

    @PostMapping("/sendNotification")
    public void sendNotifications(@RequestBody NotificationPojo request) {
        notificationService.updateNotificationInDb(request);
    }

    @GetMapping("/test")
    public String test() {
        asyncService.testingForAsynchronous();
        System.out.println("^^^^^^^^^^^^^^^^^^^"+ LocalTime.now());
        return "acknowledged";
    }

    @GetMapping("/hello")
    public String hello() {
        return "hello";
    }


}
