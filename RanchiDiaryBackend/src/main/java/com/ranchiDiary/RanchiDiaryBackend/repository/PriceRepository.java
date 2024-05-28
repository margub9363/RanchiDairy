package com.ranchiDiary.RanchiDiaryBackend.repository;

import com.ranchiDiary.RanchiDiaryBackend.entity.PriceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PriceRepository extends JpaRepository<PriceEntity,Integer> {

}
