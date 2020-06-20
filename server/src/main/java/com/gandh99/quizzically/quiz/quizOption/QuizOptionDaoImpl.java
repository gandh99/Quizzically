package com.gandh99.quizzically.quiz.quizOption;

import java.sql.PreparedStatement;
import java.sql.Statement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.stereotype.Repository;

@Repository("quiz_options")
public class QuizOptionDaoImpl implements QuizOptionDao {
  private final JdbcTemplate jdbcTemplate;

  @Autowired
  public QuizOptionDaoImpl(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  @Override
  public void insertQuizOption(QuizOption quizOption) {
    GeneratedKeyHolder holder = new GeneratedKeyHolder();
    jdbcTemplate.update(con -> {
      PreparedStatement statement = con.prepareStatement(
          "INSERT INTO quiz_options (quiz_question_id, text, is_correct) VALUES (?, ?, ?) ",
          Statement.RETURN_GENERATED_KEYS
      );

      statement.setInt(1, quizOption.getQuizQuestionId());
      statement.setString(2, quizOption.getText());
      statement.setBoolean(3, quizOption.getCorrect());
      return statement;
    }, holder);
  }

}
