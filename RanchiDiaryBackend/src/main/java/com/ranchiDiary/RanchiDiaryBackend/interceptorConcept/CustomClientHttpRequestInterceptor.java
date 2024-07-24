package com.ranchiDiary.RanchiDiaryBackend.interceptorConcept;

import org.springframework.http.HttpRequest;
import org.springframework.http.client.ClientHttpRequestExecution;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.http.client.ClientHttpResponse;

import java.io.IOException;

public class CustomClientHttpRequestInterceptor implements ClientHttpRequestInterceptor {
    @Override
    public ClientHttpResponse intercept(HttpRequest request, byte[] body, ClientHttpRequestExecution execution) throws IOException {

        // Modify the request as needed
        request.getHeaders().add("CustomHeader","CustomHeaderValue");

        // Log the request
        System.out.println("Request URI: " + request.getURI());
        System.out.println("Request Headers: "+ request.getHeaders());

        // Proceed with the execution of the request
        ClientHttpResponse response = execution.execute(request, body);

        // Modify the response as needed
        System.out.println("Response status code: "+ response.getStatusCode());

        return response;
    }
}
