package com.weather.service.impl;

import com.weather.model.Weather;
import com.weather.service.Service;

@org.springframework.stereotype.Service
public class ServiceImpl implements Service {
    @Override
    public String getName() {
        Weather weather=new Weather();
        return weather.getName();
    }
}
