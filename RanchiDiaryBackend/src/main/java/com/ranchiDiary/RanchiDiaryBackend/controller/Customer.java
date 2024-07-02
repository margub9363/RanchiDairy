package com.ranchiDiary.RanchiDiaryBackend.controller;

import com.ranchiDiary.RanchiDiaryBackend.pojo.CustomerRequestBody;
import com.ranchiDiary.RanchiDiaryBackend.pojo.NotificationPojo;
import com.ranchiDiary.RanchiDiaryBackend.service.CustomerService;
import com.ranchiDiary.RanchiDiaryBackend.service.NotificationService;
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

    @Autowired
    private NotificationService notificationService;

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

    @GetMapping("/getCustomerRecordByUserName/{userName}")
    public Optional<com.ranchiDiary.RanchiDiaryBackend.entity.Customer> getCustomerDetail(@PathVariable("userName") String userName){
        Optional<com.ranchiDiary.RanchiDiaryBackend.entity.Customer> customer = customerService.getCustomerDetailByUserName(userName);
        return customer;
    }

    @GetMapping("/getAllCustomers")
    public List<com.ranchiDiary.RanchiDiaryBackend.entity.Customer> getAllCustomersList() {
        List<com.ranchiDiary.RanchiDiaryBackend.entity.Customer> allCustomerList = customerService.getAllCustomerList();
        return allCustomerList;
    }

    @GetMapping("/getAllCustomersAsPerPagination")
    public List<com.ranchiDiary.RanchiDiaryBackend.entity.Customer> getAllCustomersList(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "name") String sortBy
    ) {
        List<com.ranchiDiary.RanchiDiaryBackend.entity.Customer> allCustomerList = customerService.getAllCustomerListAsPerPagination(page,size,sortBy);
        return allCustomerList;
    }

    @GetMapping("/nextID") // this is not working
    public long getNextAvailableIdForSignUp() {
        long nextAvailableId = customerService.getNextAvailableId();
        return nextAvailableId;
    }

    @GetMapping("/getUnreadNotification/{customerId}")
//    public List<String> getUnreadNotification (@PathVariable int customerId) {
        public List<NotificationPojo> getUnreadNotification (@PathVariable int customerId) {
        List<NotificationPojo> listOfUnReadMessagesForParticularCustomer = customerService.getListOfReadMessagesForParticularCustomer(customerId);
        return listOfUnReadMessagesForParticularCustomer;
    }

    @GetMapping("/getUnreadNotificationByUserName/{userName}")
//    public List<String> getUnreadNotification (@PathVariable int customerId) {
    public List<NotificationPojo> getUnreadNotification (@PathVariable String userName) {
        List<NotificationPojo> listOfUnReadMessagesForParticularCustomer = customerService.getListOfReadMessagesForParticularCustomerByUserName(userName);
        return listOfUnReadMessagesForParticularCustomer;
    }

    @GetMapping("/markNotificationRead/{customerId}/{notificationId}")
    public void markNotificationAsRead(@PathVariable int customerId, @PathVariable int notificationId) {
        customerService.markTheNotificationAsRead(customerId,notificationId);
    }

    @GetMapping("/markNotificationReadWithUserName/{userName}/{notificationId}")
    public void markNotificationReadWithUserName(@PathVariable String userName, @PathVariable int notificationId) {
        customerService.markTheNotificationAsReadByUserName(userName,notificationId);
    }
}
