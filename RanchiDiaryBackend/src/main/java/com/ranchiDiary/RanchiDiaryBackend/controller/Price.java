package com.ranchiDiary.RanchiDiaryBackend.controller;

import com.ranchiDiary.RanchiDiaryBackend.entity.PriceEntity;
import com.ranchiDiary.RanchiDiaryBackend.service.PriceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/price")
public class Price {

    @Autowired
    private PriceService priceService;


    @PostMapping("/update")
    public void updatePrice(@RequestBody com.ranchiDiary.RanchiDiaryBackend.pojo.Price price) {
        priceService.updatePrice(price);
    }

    @GetMapping("/getPrices")
    public Optional<PriceEntity> getPrices(){
        Optional<PriceEntity> currentPrice = priceService.getCurrentPrice();
        return currentPrice;
    }
}
