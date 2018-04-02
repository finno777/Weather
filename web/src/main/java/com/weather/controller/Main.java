package com.weather.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class Main {

    @RequestMapping(value = {"/", "/main"}, method = RequestMethod.GET)
    public String main(ModelMap model) {
        Integer price=225;
        model.addAttribute("price",price);
        return "main";
    }
}
