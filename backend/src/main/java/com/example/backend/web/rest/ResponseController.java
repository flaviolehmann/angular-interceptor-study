package com.example.backend.web.rest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/responses")
public class ResponseController {

    @Value("${app.frontend_url}")
    private String frontendUrl;

    @GetMapping
    public void generateAnswer(@RequestParam("status") int status, HttpServletResponse response) {
        response.addHeader("Access-Control-Allow-Origin", frontendUrl);
        response.setStatus(status);
    }

}
