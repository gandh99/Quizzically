package com.gandh99.quizzically.user;

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

  public int insertUser(User user) {
    return userDao.insertUser(user);
  }
}
