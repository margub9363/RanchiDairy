package com.ranchiDiary.RanchiDiaryBackend.pojo;

import lombok.Builder;
import lombok.Data;

@Data
//@Builder
public class NotificationPojo {
    public int id;
    public String title;
    public String message;
}
