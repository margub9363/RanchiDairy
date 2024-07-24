package com.ranchiDiary.RanchiDiaryBackend.interceptorConcept;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class RestTemplateConfig {

    @Bean
    RestTemplate restTemplateWithInterceptor() {

        RestTemplate restTemplate = new RestTemplate();

        // Create a list of interceptors
        List<ClientHttpRequestInterceptor> interceptors = new ArrayList<>();
        interceptors.add(new CustomClientHttpRequestInterceptor());

        // Set the interceptors on the RestTemplate
        restTemplate.setInterceptors(interceptors);

        return restTemplate;
    }
}
