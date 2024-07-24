package com.ranchiDiary.RanchiDiaryBackend.interceptorConcept;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class ControllerForInterceptor {

    @Autowired
    RestTemplate restTemplateWithInterceptor;

    @GetMapping("/interceptor")
    public Object interceptorCheck() {

        return restTemplateWithInterceptor.getForObject("https://jsonplaceholder.typicode.com/todos/1",Object.class);
    }
}
