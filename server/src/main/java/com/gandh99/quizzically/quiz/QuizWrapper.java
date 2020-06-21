package com.gandh99.quizzically.quiz;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.gandh99.quizzically.quiz.quizOverview.QuizOverview;
import com.gandh99.quizzically.quiz.quizQuestion.QuizQuestion;
import java.util.List;

public class QuizWrapper {
  @JsonProperty("quizOverview")
  private QuizOverview quizOverview;

  @JsonProperty("quizQuestions")
  private List<QuizQuestion> quizQuestion;

  public QuizWrapper() {
  }

  public QuizWrapper(QuizOverview quizOverview,
      List<QuizQuestion> quizQuestion) {
    this.quizOverview = quizOverview;
    this.quizQuestion = quizQuestion;
  }

  public QuizOverview getQuizOverview() {
    return quizOverview;
  }

  public void setQuizOverview(QuizOverview quizOverview) {
    this.quizOverview = quizOverview;
  }

  public List<QuizQuestion> getQuizQuestion() {
    return quizQuestion;
  }

  public void setQuizQuestion(
      List<QuizQuestion> quizQuestion) {
    this.quizQuestion = quizQuestion;
  }

}
