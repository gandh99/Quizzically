package com.gandh99.quizzically.user;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/")
@RestController
//@CrossOrigin("http://localhost:4200")
public class UserController {

  private final UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @PostMapping(path = "/register")
  public void insertUser(@Valid @NonNull @RequestBody User user) {
    userService.insertUser(user);
  }

  @GetMapping(path = "/hello")
  public String home() {
    return "Hello!";
  }
}
