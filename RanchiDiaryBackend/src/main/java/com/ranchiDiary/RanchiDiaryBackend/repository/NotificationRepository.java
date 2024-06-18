package com.ranchiDiary.RanchiDiaryBackend.repository;

import com.ranchiDiary.RanchiDiaryBackend.entity.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification,Integer> {
    List<Notification> findByNotificationDateAfter(Date registrationDate);
}
