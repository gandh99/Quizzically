package com.gandh99.quizzically.quiz.quizOption;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class QuizOptionService {
  private final QuizOptionDao quizOptionDao;

  @Autowired
  public QuizOptionService(@Qualifier("quiz_options") QuizOptionDao quizOptionDao) {
    this.quizOptionDao = quizOptionDao;
  }

  public void insertQuizOption(QuizOption quizOption) {
    quizOptionDao.insertQuizOption(quizOption);
  }

  public List<QuizOption> getQuizOptions(int quizQuestionId) {
    return quizOptionDao.getQuizOptions(quizQuestionId);
  }
}
