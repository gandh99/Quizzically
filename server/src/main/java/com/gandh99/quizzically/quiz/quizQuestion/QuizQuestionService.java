package com.gandh99.quizzically.quiz.quizQuestion;

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

  public void insertQuizQuestion(QuizQuestion quizQuestion) {
    quizQuestionDao.insertQuizQuestion(quizQuestion);
  }

}
