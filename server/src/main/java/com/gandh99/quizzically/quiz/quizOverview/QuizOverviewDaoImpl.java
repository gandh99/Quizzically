package com.gandh99.quizzically.quiz.quizOverview;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository("quizOverview")
public class QuizOverviewDaoImpl implements QuizOverviewDao {

  private final JdbcTemplate jdbcTemplate;

  @Autowired
  public QuizOverviewDaoImpl(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  @Override
  public void insertQuizOverview(QuizOverview quizOverview) {
    final String sql = "INSERT INTO quiz_overview (owner_id, title, description) VALUES (?, ?, ?)";
    jdbcTemplate.update(sql, 21, quizOverview.getTitle(), quizOverview.getDescription());
  }
}
