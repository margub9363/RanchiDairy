package com.ranchiDiary.RanchiDiaryBackend.service;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.time.LocalTime;

@Service
public class AsyncService {

    @Async
    public void testingForAsynchronous(){
        try {
            Thread.sleep(5000);
            System.out.println("**************************"+ LocalTime.now());
        } catch (InterruptedException e) {

        }
    }
}
