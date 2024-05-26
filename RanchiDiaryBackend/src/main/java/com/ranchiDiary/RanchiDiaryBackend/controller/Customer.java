package com.ranchiDiary.RanchiDiaryBackend.controller;

import com.ranchiDiary.RanchiDiaryBackend.pojo.CustomerRequestBody;
import com.ranchiDiary.RanchiDiaryBackend.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping("/getCustomerRecord/{id}")
    public Optional<com.ranchiDiary.RanchiDiaryBackend.entity.Customer> getCustomerDetail(@PathVariable("id") int id){
        Optional<com.ranchiDiary.RanchiDiaryBackend.entity.Customer> customer = customerService.getCustomerDetail(id);
        return customer;
    }

    @GetMapping("/getAllCustomers")
    public List<com.ranchiDiary.RanchiDiaryBackend.entity.Customer> getAllCustomersList() {
        List<com.ranchiDiary.RanchiDiaryBackend.entity.Customer> allCustomerList = customerService.getAllCustomerList();
        return allCustomerList;
    }
}
