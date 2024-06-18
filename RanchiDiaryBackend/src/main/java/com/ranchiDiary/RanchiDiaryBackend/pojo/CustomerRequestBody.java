package com.ranchiDiary.RanchiDiaryBackend.pojo;

import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class CustomerRequestBody {
    public String name;
    public long number;
    public float dueAmount;
    public String address;
    public String username;
/*
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public int getNumber() {
        return number;
    }

    public float getDueAmount() {
        return dueAmount;
    }*/
//  Object picture;

}
