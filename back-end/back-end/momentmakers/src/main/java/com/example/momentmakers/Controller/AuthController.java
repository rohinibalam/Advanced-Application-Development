package com.example.momentmakers.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.momentmakers.Service.AuthenticationService;
import com.example.momentmakers.dto.request.LoginRequest;
import com.example.momentmakers.dto.request.RegisterRequest;
import com.example.momentmakers.dto.response.AuthenticationResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/users/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public String register(
        @RequestBody RegisterRequest request
    ){
        var response = service.register(request);
        return response;

    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
        @RequestBody LoginRequest request
    ){
        return ResponseEntity.ok(service.login(request));
    }
}
