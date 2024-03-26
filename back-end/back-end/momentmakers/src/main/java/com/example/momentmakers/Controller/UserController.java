package com.example.momentmakers.Controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users/user")
@PreAuthorize("hasRole('USER')")
public class UserController {
    
    @GetMapping("/view")
    @PreAuthorize("hasAuthority('user:READ')")
    public String viewUser(){
        return "viewUser";
    }
    
    @PostMapping("/post")
    @PreAuthorize("hasAuthority('user:CREATE')")
    public String createUser(){
        return "createUser";
    }

    @PutMapping("/update")
    public String updateUser(){
        return "updateUser";
    }
    
    @DeleteMapping
    public String deleteUser(){
        return "deleteUser";
    }
}
