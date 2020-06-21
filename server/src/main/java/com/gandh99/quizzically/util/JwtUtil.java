package com.gandh99.quizzically.util;

import com.gandh99.quizzically.user.UserService;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

@Service
public class JwtUtil {
  @Autowired
  private final UserService userService;

  @Autowired
  public JwtUtil(UserService userService) {
    this.userService = userService;
  }

  public Optional<com.gandh99.quizzically.user.User> getUserFromPrincipal() {
    User principalUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    return userService.selectUser(principalUser.getUsername());
  }
}
