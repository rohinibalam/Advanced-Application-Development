package com.example.momentmakers.Repository.token;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.momentmakers.Entity.token.Token;

public interface TokenRepository extends JpaRepository<Token, Integer>{

    @Query("""
        SELECT t FROM Token t WHERE t.userInfo.email = :useremail AND (t.expired = false OR t.revoked = false)
    """)
    List<Token> findAllValidTokensByUser(String useremail);


    Optional<Token> findByToken(String token);


}
