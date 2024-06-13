package com.ranchiDiary.RanchiDiaryBackend.repository;

import com.ranchiDiary.RanchiDiaryBackend.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository <Customer,Integer> {

    @Query("SELECT MAX(c.id) FROM Customer c")
    Long findMaxId();

}
