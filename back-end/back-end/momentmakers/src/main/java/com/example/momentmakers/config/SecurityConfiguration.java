package com.example.momentmakers.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;

import com.example.momentmakers.Entity.user.Permission;
import com.example.momentmakers.Entity.user.Role;
import com.example.momentmakers.utils.MyConstant;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

    private final JwtAuthenticationFilter JwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;
    private final LogoutHandler logoutHandler;
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http
            .csrf(csrf -> csrf.disable())
.authorizeHttpRequests(authorize -> authorize.requestMatchers(MyConstant.WHITELIST_URL).permitAll()                .requestMatchers("/users/user/**").hasAnyRole(Role.ADMIN.name(), Role.USER.name())

                
                .requestMatchers(HttpMethod.GET, "/users/user/**").hasAnyAuthority(Permission.USER_READ.name())
                .requestMatchers(HttpMethod.POST, "/users/user/**").hasAnyAuthority(Permission.USER_CREATE.name())
                .requestMatchers(HttpMethod.PUT, "/users/user/**").hasAnyAuthority(Permission.USER_UPDATE.name())
                .requestMatchers(HttpMethod.DELETE, "/users/user/**").hasAnyAuthority(Permission.USER_DELETE.name())

                .requestMatchers("/users/v1/admin/**").hasAnyRole(Role.ADMIN.name())

                .requestMatchers(HttpMethod.GET, "/users/admin/**").hasAnyAuthority(Permission.ADMIN_READ.name())
                .requestMatchers(HttpMethod.POST, "/users/admin/**").hasAnyAuthority(Permission.ADMIN_CREATE.name())
                .requestMatchers(HttpMethod.PUT, "/users/admin/**").hasAnyAuthority(Permission.ADMIN_UPDATE.name())
                .requestMatchers(HttpMethod.DELETE, "/users/admin/**").hasAnyAuthority(Permission.ADMIN_DELETE.name())


            .anyRequest()
            .authenticated())
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authenticationProvider(authenticationProvider)
            .addFilterBefore(JwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
            .logout(logout -> 
            logout
            .logoutUrl("/users/logout")
            .addLogoutHandler(logoutHandler)
            .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext())) 
            ;

        return http.build();
    }
}
