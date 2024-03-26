package com.example.momentmakers.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.momentmakers.Entity.user.UserInfo;

public interface UserRepository extends JpaRepository<UserInfo, String>{
    Optional<UserInfo> findByEmail(String email);
}
