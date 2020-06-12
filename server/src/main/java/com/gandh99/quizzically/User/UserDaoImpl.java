package com.gandh99.quizzically.User;

import org.springframework.beans.factory.annotation.Autowired;
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
    return 0;
  }
}
