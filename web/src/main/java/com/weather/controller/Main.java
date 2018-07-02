package com.weather.controller;

import com.weather.model.Weather;
import org.springframework.http.HttpRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;

@Controller
public class Main {

    private static final String MAIN = "main";

    @RequestMapping(value = "/getW",method = RequestMethod.GET)
    public List<Weather> takePrise(){
        Weather weather1=new Weather(4,"Steal");
        Weather weather2=new Weather(4,"Stea2");
        Weather weather3=new Weather(4,"Stea3");
        List<Weather> list=new ArrayList<>();
        list.add(weather1);
        list.add(weather2);
        list.add(weather3);
        return list;
    }

    public List<Weather> getAllWeathers(){
        Weather weather4=new Weather(4,"Stea4");
        Weather weather5=new Weather(5,"Stea5");
        Weather weather6=new Weather(6,"Stea6");
        List<Weather> list=new ArrayList<>();
        list.add(weather4);
        list.add(weather5);
        list.add(weather6);
        return list;
    }
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String main(){
        ModelAndView model=new ModelAndView();
        return MAIN;
    }


    @RequestMapping(value = "/getPrise",method = RequestMethod.POST)
    public ResponseEntity takePrise(@RequestParam Integer number){
        int g=takeSum(number);
        return ResponseEntity.ok(g);
    }

    private Integer takeSum(int a){
        a=a++;
        return a;
    }
}
