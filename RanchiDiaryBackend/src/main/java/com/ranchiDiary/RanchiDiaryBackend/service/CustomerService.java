package com.ranchiDiary.RanchiDiaryBackend.service;

import com.ranchiDiary.RanchiDiaryBackend.entity.Customer;
import com.ranchiDiary.RanchiDiaryBackend.pojo.CustomerRequestBody;
import com.ranchiDiary.RanchiDiaryBackend.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;



    public int saveCustomerDataInDatabase(CustomerRequestBody customerRequestBody){
        Customer customer = Customer.builder().build();
        customer.setName(customerRequestBody.getName());
        customer.setAddress(customerRequestBody.getAddress());
        customer.setContact_no(customer.getContact_no());
        Customer savedRecord = customerRepository.save(customer);
        return savedRecord.getId();
    }
}
