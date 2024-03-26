package com.example.momentmakers.Controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users/admin")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {
    @GetMapping("/view")
    @PreAuthorize("hasAuthority('admin:READ')")
    public String viewAdmin(){
        return "viewAdmin";
    }
}
