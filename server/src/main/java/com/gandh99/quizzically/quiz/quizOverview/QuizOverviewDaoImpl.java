package com.gandh99.quizzically.quiz.quizOverview;

import java.sql.PreparedStatement;
import java.sql.Statement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.stereotype.Repository;

@Repository("quiz_overview")
public class QuizOverviewDaoImpl implements QuizOverviewDao {

  private final JdbcTemplate jdbcTemplate;

  @Autowired
  public QuizOverviewDaoImpl(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  @Override
  public int insertQuizOverview(QuizOverview quizOverview) {
    GeneratedKeyHolder holder = new GeneratedKeyHolder();
    jdbcTemplate.update(con -> {
      PreparedStatement statement = con.prepareStatement(
          "INSERT INTO quiz_overview (owner_id, title, description) VALUES (?, ?, ?) ",
          Statement.RETURN_GENERATED_KEYS
      );

      // TODO: Set to owner_id
      statement.setInt(1, 21);
      statement.setString(2, quizOverview.getTitle());
      statement.setString(3, quizOverview.getDescription());
      return statement;
    }, holder);

    return (int) holder.getKeys().get("quiz_overview_id");
  }
}
