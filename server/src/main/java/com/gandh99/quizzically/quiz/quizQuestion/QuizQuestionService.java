package com.gandh99.quizzically.quiz.quizQuestion;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class QuizQuestionService {
  private final QuizQuestionDao quizQuestionDao;

  @Autowired
  public QuizQuestionService(@Qualifier("quiz_questions") QuizQuestionDao quizQuestionDao) {
    this.quizQuestionDao = quizQuestionDao;
  }

  public int insertQuizQuestion(QuizQuestion quizQuestion) {
    return quizQuestionDao.insertQuizQuestion(quizQuestion);
  }

  public List<QuizQuestion> getQuizQuestions(int quizOverviewId) {
    return quizQuestionDao.getQuizQuestions(quizOverviewId);
  }

}
