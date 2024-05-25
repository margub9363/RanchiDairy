package com.ranchiDiary.RanchiDiaryBackend.controller;

import com.ranchiDiary.RanchiDiaryBackend.pojo.CustomerRequestBody;
import com.ranchiDiary.RanchiDiaryBackend.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customer")
public class Customer {

    @Autowired
    private CustomerService
            customerService;

    @PostMapping("/insertCustomerRecord")
    public int insertCustomerRecord(@RequestBody CustomerRequestBody customerRequestBody){
        int id = customerService.saveCustomerDataInDatabase(customerRequestBody);
        return id;

    }
}
