package com.ranchiDiary.RanchiDiaryBackend.controller;



import com.ranchiDiary.RanchiDiaryBackend.model.AppUser;
import com.ranchiDiary.RanchiDiaryBackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public String registerUser(@RequestBody AppUser appUser) {
        appUser.setPassword(passwordEncoder.encode(appUser.getPassword()));
        appUser.setRole("CUSTOEMR");
        userRepository.save(appUser);
        return "User registered successfully";
    }
}
