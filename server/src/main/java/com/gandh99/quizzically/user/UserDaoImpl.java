package com.gandh99.quizzically.user;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository("postgres")
public class UserDaoImpl implements UserDao {

  private final JdbcTemplate jdbcTemplate;

  @Autowired
  public UserDaoImpl(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  @Override
  public void insertUser(User user) throws DuplicateKeyException {
    final String sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    jdbcTemplate.update(sql, user.getUsername(), user.getPassword());
  }

  @Override
  public Optional<User> selectUser(User user) {
    return selectUserFromUsername(user.getUsername());
  }

  @Override
  public Optional<User> selectUser(String username) {
    return selectUserFromUsername(username);
  }

  private Optional<User> selectUserFromUsername(String username) {
    final String sql = "SELECT * FROM users WHERE username = ?";
    User selectedUser;

    try {
      selectedUser = jdbcTemplate.queryForObject(
          sql,
          new Object[]{username},
          ((resultSet, i) -> {
            int userId = resultSet.getInt("user_id");
            String usernameResult = resultSet.getString("username");
            String passwordResult = resultSet.getString("password");
            return new User(userId, usernameResult, passwordResult, null);
          })
      );
    } catch (EmptyResultDataAccessException emptyResultDataAccessException) {
      return Optional.empty();
    }

    return Optional.ofNullable(selectedUser);
  }

}
