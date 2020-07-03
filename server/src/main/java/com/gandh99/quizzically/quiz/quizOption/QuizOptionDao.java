package com.gandh99.quizzically.quiz.quizOption;

import java.util.List;

public interface QuizOptionDao {
  void insertQuizOption(QuizOption quizOption);
  List<QuizOption> getQuizOptions(int quizQuestionId);
}
