package com.example.backend.web.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping("/responses")
public class ResponseController {

    @GetMapping
    public ResponseEntity<?> generateAnswer(@RequestParam("status") int status) {
        return ResponseEntity.status(status).build();
    }

}
