package com.gandh99.quizzically.quiz.quizOption;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;

public class QuizOptionDaoImpl implements QuizOptionDao {
  private final JdbcTemplate jdbcTemplate;

  @Autowired
  public QuizOptionDaoImpl(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  @Override
  public void insertQuizOption(QuizOption quizOption) {
    GeneratedKeyHolder holder = new GeneratedKeyHolder();
//    jdbcTemplate.update(con -> {
//      PreparedStatement statement = con.prepareStatement(
//          "INSERT INTO quiz_overview (owner_id, title, description) VALUES (?, ?, ?) ",
//          Statement.RETURN_GENERATED_KEYS
//      );
//
//      statement.setInt(1, 21);
//      statement.setString(2, quizOverview.getTitle());
//      statement.setString(3, quizOverview.getDescription());
//      return statement;
//    }, holder);
//
//    return (int) holder.getKeys().get("quiz_overview_id");
  }

}
