package com.gandh99.quizzically.user;

import java.util.Optional;

public interface UserDao {
  void insertUser(User user);
  Optional<User> selectUser(User user);
  Optional<User> selectUser(String username);
}
