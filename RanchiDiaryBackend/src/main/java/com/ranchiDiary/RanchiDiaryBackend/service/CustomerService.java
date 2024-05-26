package com.ranchiDiary.RanchiDiaryBackend.service;

import com.ranchiDiary.RanchiDiaryBackend.entity.Customer;
import com.ranchiDiary.RanchiDiaryBackend.pojo.CustomerRequestBody;
import com.ranchiDiary.RanchiDiaryBackend.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;



    public int saveCustomerDataInDatabase(CustomerRequestBody customerRequestBody){
        Customer customer = Customer.builder().build();
        customer.setName(customerRequestBody.getName());
        customer.setAddress(customerRequestBody.getAddress());
        customer.setContact_no(customerRequestBody.getNumber());
        Customer savedRecord = customerRepository.save(customer);
        return savedRecord.getId();
    }

    public Optional<Customer> getCustomerDetail(int id) {
        Optional<Customer> byId = customerRepository.findById(id);
        return byId;
    }

    public List<Customer> getAllCustomerList() {
        List<Customer> customersList = customerRepository.findAll();
        return customersList;
    }
}
