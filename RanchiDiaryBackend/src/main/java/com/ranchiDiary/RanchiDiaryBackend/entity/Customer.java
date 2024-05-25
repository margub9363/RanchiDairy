package com.ranchiDiary.RanchiDiaryBackend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;
    public String name;
    public int contact_no;
    public float due_amount;
//    blob picture;
    public String address;
/*
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getContact_no() {
        return contact_no;
    }

    public float getDue_amount() {
        return due_amount;
    }

    public String getAddress() {
        return address;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setContact_no(int contact_no) {
        this.contact_no = contact_no;
    }

    public void setDue_amount(float due_amount) {
        this.due_amount = due_amount;
    }

    public void setAddress(String address) {
        this.address = address;
    }*/
}
