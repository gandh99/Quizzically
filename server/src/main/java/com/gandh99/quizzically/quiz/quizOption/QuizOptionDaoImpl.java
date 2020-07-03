package com.gandh99.quizzically.quiz.quizOption;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
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

  @Override
  public List<QuizOption> getQuizOptions(int quizQuestionId) {
    final String sql = "SELECT * FROM quiz_options WHERE quiz_question_id = ?";

    try {
      return jdbcTemplate.query(
          sql,
          new Object[]{quizQuestionId},
          ((resultSet, i) -> {
            int quizOptionId = resultSet.getInt("quiz_option_id");
            String text = resultSet.getString("text");
            Boolean isCorrect = resultSet.getBoolean("is_correct");

            return new QuizOption(quizOptionId, quizQuestionId, text, isCorrect);
          })
      );
    } catch (EmptyResultDataAccessException emptyResultDataAccessException) {
      return null;
    }
  }

}
