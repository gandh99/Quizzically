package com.gandh99.quizzically.quiz.quizQuestion;

import java.sql.PreparedStatement;
import java.sql.Statement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.stereotype.Repository;

@Repository("quiz_questions")
public class QuizQuestionDaoImpl implements QuizQuestionDao {
  private final JdbcTemplate jdbcTemplate;

  @Autowired
  public QuizQuestionDaoImpl(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  @Override
  public int insertQuizQuestion(QuizQuestion quizQuestion) {
    GeneratedKeyHolder holder = new GeneratedKeyHolder();
    jdbcTemplate.update(con -> {
      PreparedStatement statement = con.prepareStatement(
          "INSERT INTO quiz_questions (quiz_overview_id, question_number, question) VALUES (?, ?, ?)",
          Statement.RETURN_GENERATED_KEYS
      );

      statement.setInt(1, quizQuestion.getQuizOverviewId());
      statement.setInt(2, quizQuestion.getQuestionNumber());
      statement.setString(3, quizQuestion.getQuestion());
      return statement;
    }, holder);

    return (int) holder.getKeys().get("quiz_question_id");
  }

  @Override
  public QuizQuestion getQuizQuestions(int quizOverviewId) {
    final String sql = "SELECT * FROM quiz_questions WHERE quiz_overview_id = ?";

    try {
      return jdbcTemplate.queryForObject(
          sql,
          new Object[]{quizOverviewId},
          ((resultSet, i) -> {
            int quizQuestionId = resultSet.getInt("quiz_question_id");
            int questionNumber = resultSet.getInt("question_number");
            String question = resultSet.getString("question");

            return new QuizQuestion(quizQuestionId, quizOverviewId, questionNumber, question, null);
          })
      );
    } catch (EmptyResultDataAccessException emptyResultDataAccessException) {
      return null;
    }
  }
}
