package com.gandh99.quizzically.quiz.quizOverview;

import com.gandh99.quizzically.user.User;
import java.util.List;

public interface QuizOverviewDao {
  int insertQuizOverview(QuizOverview quizOverview);
  List<QuizOverview> getQuizOverview(User user);
}
