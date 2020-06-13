package com.gandh99.quizzically.user;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
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
  public int insertUser(User user) {
    final String sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    return jdbcTemplate.update(sql, user.getUsername(), user.getPassword());
  }

  @Override
  public Optional<User> selectUser(User user) {
    final String sql = "SELECT * FROM users WHERE username = ?";
    User selectedUser;

    try {
      selectedUser = jdbcTemplate.queryForObject(
          sql,
          new Object[]{user.getUsername()},
          ((resultSet, i) -> {
            int userId = resultSet.getInt("user_id");
            String username = resultSet.getString("username");
            String password = resultSet.getString("password");
            return new User(userId, username, password, null);
          })
      );
    } catch (EmptyResultDataAccessException emptyResultDataAccessException) {
      return Optional.empty();
    }

    return Optional.ofNullable(selectedUser);
  }
}
