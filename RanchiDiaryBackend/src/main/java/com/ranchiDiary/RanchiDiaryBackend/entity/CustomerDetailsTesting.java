package com.ranchiDiary.RanchiDiaryBackend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class CustomerDetailsTesting {

    @Id
    private int id;

    private String name;
}
