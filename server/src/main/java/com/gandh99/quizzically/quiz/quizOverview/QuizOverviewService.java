package com.gandh99.quizzically.quiz.quizOverview;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class QuizOverviewService {
  private final QuizOverviewDao quizOverviewDao;

  @Autowired
  public QuizOverviewService(@Qualifier("quizOverview") QuizOverviewDao quizOverviewDao) {
    this.quizOverviewDao = quizOverviewDao;
  }

  public void insertQuizOverview(QuizOverview quizOverview) {
    quizOverviewDao.insertQuizOverview(quizOverview);
  }

}
