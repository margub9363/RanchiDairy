package com.ranchiDiary.RanchiDiaryBackend.repository;

import com.ranchiDiary.RanchiDiaryBackend.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<AppUser, Long> {
    AppUser findByUsername(String username);
}