package com.ranchiDiary.RanchiDiaryBackend.entity;

import jakarta.persistence.*;
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
    @Column(name = "contact_no")
    public int contact_no;
    @Column(name = "due_amount")
    public float due_amount;
//    blob picture;
    public String address;

}
