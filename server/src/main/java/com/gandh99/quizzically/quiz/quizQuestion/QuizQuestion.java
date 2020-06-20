package com.gandh99.quizzically.quiz.quizQuestion;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.gandh99.quizzically.quiz.quizOption.QuizOption;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "quiz_questions")
public class QuizQuestion {
  @Id
  @Column(name = "quiz_question_id")
  private Integer quizQuestionId;

  @Column(name = "quiz_overview_id")
  private Integer quizOverviewId;

  @JsonProperty("questionNumber")
  @Column(name = "question_number")
  private Integer questionNumber;

  @JsonProperty("question")
  @Column(name = "question")
  private String question;

  @JsonProperty("quizOption")
  private List<QuizOption> quizOptionList;

  public QuizQuestion() {
  }

  public QuizQuestion(Integer quizQuestionId, Integer quizOverviewId,
      Integer questionNumber, String question,
      List<QuizOption> quizOptionList) {
    this.quizQuestionId = quizQuestionId;
    this.quizOverviewId = quizOverviewId;
    this.questionNumber = questionNumber;
    this.question = question;
    this.quizOptionList = quizOptionList;
  }

  public Integer getQuizQuestionId() {
    return quizQuestionId;
  }

  public void setQuizQuestionId(Integer quizQuestionId) {
    this.quizQuestionId = quizQuestionId;
  }

  public Integer getQuizOverviewId() {
    return quizOverviewId;
  }

  public void setQuizOverviewId(Integer quizOverviewId) {
    this.quizOverviewId = quizOverviewId;
  }

  public Integer getQuestionNumber() {
    return questionNumber;
  }

  public void setQuestionNumber(Integer questionNumber) {
    this.questionNumber = questionNumber;
  }

  public String getQuestion() {
    return question;
  }

  public void setQuestion(String question) {
    this.question = question;
  }

  public List<QuizOption> getQuizOptionList() {
    return quizOptionList;
  }

  public void setQuizOptionList(List<QuizOption> quizOptionList) {
    this.quizOptionList = quizOptionList;
  }
}
