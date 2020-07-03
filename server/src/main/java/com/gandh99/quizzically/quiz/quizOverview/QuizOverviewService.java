package com.gandh99.quizzically.quiz.quizOverview;

import com.gandh99.quizzically.user.User;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class QuizOverviewService {
  private final QuizOverviewDao quizOverviewDao;

  @Autowired
  public QuizOverviewService(@Qualifier("quiz_overview") QuizOverviewDao quizOverviewDao) {
    this.quizOverviewDao = quizOverviewDao;
  }

  public int insertQuizOverview(QuizOverview quizOverview) {
    return quizOverviewDao.insertQuizOverview(quizOverview);
  }

  public List<QuizOverview> getQuizOverview(User user) {
    return quizOverviewDao.getQuizOverview(user);
  }

}
