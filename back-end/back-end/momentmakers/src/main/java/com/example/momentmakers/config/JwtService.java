package com.example.momentmakers.config;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {
    private static final String SECRET_KEY =  "ZA6dMSi3Bpaoxg4PxfbGc65fthyutryjdfhgjgtukryjdhmgzxdsxdxcgtrfvghytgbhjygbnjjkij562148yuuihdtr67tugjhdhjhfgD+HDTfRUSnRlkNRXWuetm9wNFkzvsoEn3F0L1/CXfV0SjhUs9BsOCJGWw+C3S/IUlNW3RuIBbZ/talMeurKaQpAxiBuFS5xaL/yP0P7M67brvqT6DdwGx0dXCPaMXm0Fz9PYZP775XjwaZcwyLDxLKqrdDUjExOtxeMRECl7xhJBDd+etepFKxJhIqP21jK9r3HVNG3LzS3mFMGnKsbs4QRyWVY=";

    public String extractUserEmail(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver){
        final Claims claims = extraAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public String generateToken(
        Map<String, Object> extraclaims,
        UserDetails userDetails
    ){
        return Jwts
        .builder()
        .setClaims(extraclaims)
        .setSubject(userDetails.getUsername())
        .setIssuedAt(new Date(System.currentTimeMillis()))
        .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 24))
        .signWith(getSignInKey(), SignatureAlgorithm.HS256)
        .compact();
    }

    public boolean isTokenValid(String token, UserDetails userDetails){
        final String useremail = extractUserEmail(token);
        return (useremail.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    private Claims extraAllClaims(String token){
        return Jwts
            .parserBuilder()
            .setSigningKey(getSignInKey())
            .build()
            .parseClaimsJws(token).getBody();

    }

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }

     public String generateToken(UserDetails userDetails){
        return generateToken(new HashMap<>(), userDetails);
    }

}
