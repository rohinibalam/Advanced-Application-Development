package com.example.momentmakers.dto.request;

import com.example.momentmakers.Entity.user.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String email;
    private String name;
    private String password;
    private Role role;
}
