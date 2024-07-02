package com.ranchiDiary.RanchiDiaryBackend.repository.sortingAndPaginationRepository;

import com.ranchiDiary.RanchiDiaryBackend.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRpository extends JpaRepository<Customer,Integer> {
}
