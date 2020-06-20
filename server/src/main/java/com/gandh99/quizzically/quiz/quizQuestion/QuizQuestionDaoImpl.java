package com.gandh99.quizzically.quiz.quizQuestion;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository("quiz_questions")
public class QuizQuestionDaoImpl implements QuizQuestionDao {
  private final JdbcTemplate jdbcTemplate;

  @Autowired
  public QuizQuestionDaoImpl(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  @Override
  public void insertQuizQuestion(QuizQuestion quizQuestion) {
    final String sql = "INSERT INTO quiz_questions (quiz_overview_id, question_number, question) VALUES (?, ?, ?)";
    jdbcTemplate.update(sql, 21, quizQuestion.getQuestionNumber(), quizQuestion.getQuestion());
  }
}
