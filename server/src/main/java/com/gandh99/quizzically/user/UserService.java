package com.gandh99.quizzically.user;

import com.gandh99.quizzically.util.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  private final UserDao userDao;

  @Autowired
  public UserService(@Qualifier("postgres") UserDao userDao) {
    this.userDao = userDao;
  }

  void insertUser(User user) {
    String hashedPassword = PasswordEncoder.hashPassword(user.getPassword());
    user.setPassword(hashedPassword);
    userDao.insertUser(user);
  }
}
