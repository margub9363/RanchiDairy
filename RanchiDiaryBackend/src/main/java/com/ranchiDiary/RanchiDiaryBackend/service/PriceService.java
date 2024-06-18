package com.ranchiDiary.RanchiDiaryBackend.service;

import com.ranchiDiary.RanchiDiaryBackend.entity.PriceEntity;
import com.ranchiDiary.RanchiDiaryBackend.pojo.Price;
import com.ranchiDiary.RanchiDiaryBackend.repository.PriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PriceService {

    @Autowired
    private PriceRepository priceRepository;

    public void updatePrice(Price prices) {
        PriceEntity priceEntity = PriceEntity.builder().build();
        priceEntity.setId(1);
        priceEntity.setMilk(prices.getMilkPrice());
        priceEntity.setEgg(prices.getEggPrice());
        priceEntity.setPaneer(prices.getPaneerPrice());
        priceRepository.save(priceEntity);
    }

    public Optional<PriceEntity> getCurrentPrice(){
        Optional<PriceEntity> priceEntity = priceRepository.findById(1);
        return priceEntity;
    }
}
