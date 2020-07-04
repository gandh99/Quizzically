package com.gandh99.quizzically.quiz.quizQuestion;

import com.gandh99.quizzically.quiz.quizOption.QuizOption;
import com.gandh99.quizzically.quiz.quizOption.QuizOptionService;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.stereotype.Repository;

@Repository("quiz_questions")
public class QuizQuestionDaoImpl implements QuizQuestionDao {

  private final JdbcTemplate jdbcTemplate;
  private final QuizOptionService quizOptionService;

  @Autowired
  public QuizQuestionDaoImpl(JdbcTemplate jdbcTemplate,
      QuizOptionService quizOptionService) {
    this.jdbcTemplate = jdbcTemplate;
    this.quizOptionService = quizOptionService;
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
  public List<QuizQuestion> getQuizQuestions(int quizOverviewId) {
    final String sql = "SELECT * FROM quiz_questions WHERE quiz_overview_id = ?";

    try {
      return jdbcTemplate.query(
          sql,
          new Object[]{quizOverviewId},
          ((resultSet, i) -> {
            int quizQuestionId = resultSet.getInt("quiz_question_id");
            int questionNumber = resultSet.getInt("question_number");
            String question = resultSet.getString("question");

            // Get the quiz options for this quiz question
            List<QuizOption> quizOptions = quizOptionService.getQuizOptions(quizQuestionId);

            return new QuizQuestion(quizQuestionId, quizOverviewId, questionNumber, question,
                quizOptions);
          })
      );
    } catch (EmptyResultDataAccessException emptyResultDataAccessException) {
      return null;
    }
  }
}
