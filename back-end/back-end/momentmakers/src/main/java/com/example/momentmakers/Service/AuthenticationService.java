package com.example.momentmakers.Service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.momentmakers.Entity.token.Token;
import com.example.momentmakers.Entity.token.TokenType;
import com.example.momentmakers.Entity.user.Role;
import com.example.momentmakers.Entity.user.UserInfo;
import com.example.momentmakers.Repository.UserRepository;
import com.example.momentmakers.Repository.token.TokenRepository;
import com.example.momentmakers.config.JwtService;
import com.example.momentmakers.dto.request.LoginRequest;
import com.example.momentmakers.dto.request.RegisterRequest;
import com.example.momentmakers.dto.response.AuthenticationResponse;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService { 
    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final TokenRepository tokenRepository;


    public String register(RegisterRequest request){
        var user = UserInfo.builder()
            .email(request.getEmail())
            .name(request.getName())
            .password(passwordEncoder.encode(request.getPassword()))
            .role(request.getRole())
            .build();
        var savedUser = userRepo.save(user);
        var usertoken = jwtService.generateToken(user);
        savedUserToken(savedUser, usertoken);
        return "User Registered Successfully";
    }

    public AuthenticationResponse login(LoginRequest request) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.getEmail(),
                request.getPassword()
            )
        );
        
        var user = userRepo.findByEmail(request.getEmail()).orElseThrow();
        var userToken = jwtService.generateToken(user);
        revokeAllUserTokens(user);
        var role=user.getRole();
        savedUserToken(user, userToken);
        return AuthenticationResponse.builder() 
                    .token(userToken)
                    .role(role)
                    .build();
    }

    private void revokeAllUserTokens(UserInfo userInfo){
        var validUserToken = tokenRepository.findAllValidTokensByUser(userInfo.getEmail());
        if(validUserToken.isEmpty()){
            return;
        }
        validUserToken.forEach(t -> {
            t.setExpired(true);
            t.setRevoked(true);
        });
        tokenRepository.saveAll(validUserToken);
    }

    private void savedUserToken(UserInfo savedUser, String userToken){
        var token = Token.builder()
            .userInfo(savedUser)
            .token(userToken)
            .tokenType(TokenType.BEARER)
            .revoked(false)
            .expired(false)
            .build();
        tokenRepository.save(token);
    }
}
