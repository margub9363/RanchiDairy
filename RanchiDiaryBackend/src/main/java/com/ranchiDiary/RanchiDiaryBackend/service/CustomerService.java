package com.ranchiDiary.RanchiDiaryBackend.service;

import com.ranchiDiary.RanchiDiaryBackend.entity.Customer;
import com.ranchiDiary.RanchiDiaryBackend.pojo.CustomerRequestBody;
import com.ranchiDiary.RanchiDiaryBackend.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private NotificationService notificationService;



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

//    public List<Integer> getListOfReadMessagesForParticularCustomer(int id) {
        public List<String> getListOfReadMessagesForParticularCustomer(int id) {
//            step1 -> get the customer registration date and list of notification Id's which he has read
        Optional<Customer> byId = customerRepository.findById(id);
        Date customerRegistrationDate = byId.get().registration_date;
            System.out.println("***************************");
            System.out.println(customerRegistrationDate);
                  String[] arrayOfReadNotificatonIDsInStringFormat = byId.get().notifications_read.split(" ");
        List<Integer> notificationsRead = new ArrayList<>();
        for(String s : arrayOfReadNotificatonIDsInStringFormat) {
            notificationsRead.add(Integer.parseInt(s));
        }

//            step2 -> fetch the list of notification ids just after the registration
            List<Integer> listOfNotificationsIdAfterRegistration = notificationService.getTheListOfNotificationsIdAfterTheGivenDate(customerRegistrationDate);

//            step3 -> from this range, remove the ids which is existing in the customer table and the remaining will be the ids for unread messages
            List<Integer> unreadNotificationIds = new ArrayList<>();
            listOfNotificationsIdAfterRegistration.stream().forEach( nottificationId -> {
                if (!notificationsRead.contains(nottificationId)) unreadNotificationIds.add(nottificationId);
            });
            System.out.println("----------------"+unreadNotificationIds);
//            step4 -> from the given ID's fetch the notifications and provide as an output to the consumer.
            Collections.sort(unreadNotificationIds);
            List<String> unreadMessages = notificationService.listOfNotificationMessagesForTheGiveIds(unreadNotificationIds);
            return unreadMessages;
        }

    public void markTheNotificationAsRead(int customerId,int notificationId) {
        Optional<Customer> byId = customerRepository.findById(customerId);
        Customer c = new Customer();
        if(byId.isPresent()) {
            c=byId.get();
        }
        String notificationsRead =c.getNotifications_read();
        if(notificationsRead!=null)
        notificationsRead = notificationsRead + " "+ notificationId;
        else notificationsRead = ""+notificationId;
        c.setNotifications_read(notificationsRead);
        customerRepository.save(c);
    }
}
