package com.gandh99.quizzically.quiz.quizQuestion;

import com.gandh99.quizzically.quiz.QuizOption;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "quiz_questions")
public class QuizQuestion {
  @Column(name = "quiz_question_id")
  private Integer quizQuestionId;

  @Column(name = "quiz_overview_id")
  private Integer quizOverviewId;

  @Column(name = "question_number")
  private Integer questionNumber;

  @Column(name = "question")
  private String question;

  @OneToMany
  @JoinTable(name = "quiz_options", joinColumns = @JoinColumn(name = "quiz_question_id"))
  private QuizOption[] quizOptions;

  public QuizQuestion() {
  }

  public QuizQuestion(Integer quizQuestionId, Integer quizOverviewId,
      Integer questionNumber, String question) {
    this.quizQuestionId = quizQuestionId;
    this.quizOverviewId = quizOverviewId;
    this.questionNumber = questionNumber;
    this.question = question;
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
}
