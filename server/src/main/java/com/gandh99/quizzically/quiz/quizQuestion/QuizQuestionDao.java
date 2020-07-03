package com.gandh99.quizzically.quiz.quizQuestion;

import java.util.List;

public interface QuizQuestionDao {
  int insertQuizQuestion(QuizQuestion quizQuestion);
  QuizQuestion getQuizQuestion(int quizOverviewId);
}
