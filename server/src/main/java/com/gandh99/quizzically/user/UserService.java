package com.gandh99.quizzically.user;

import com.gandh99.quizzically.util.PasswordEncoder;
import java.util.Optional;
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

  Optional<User> selectUser(User user) {
    String plaintextPassword = user.getPassword();
    String hashedPassword = PasswordEncoder.hashPassword(plaintextPassword);
    user.setPassword(hashedPassword);
    Optional<User> returnedUser = userDao.selectUser(user);

    // Verify that password matches
    if (returnedUser.isPresent() &&
        PasswordEncoder.checkPassword(plaintextPassword, returnedUser.get().getPassword())) {
      // Don't return the password
      returnedUser.get().setPassword(null);
      return returnedUser;
    } else {
      return Optional.empty();
    }
  }
}
