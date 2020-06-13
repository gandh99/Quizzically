package com.gandh99.quizzically.user;

import java.util.Optional;

public interface UserDao {
  int insertUser(User user);
  Optional<User> selectUser(User user);
}
