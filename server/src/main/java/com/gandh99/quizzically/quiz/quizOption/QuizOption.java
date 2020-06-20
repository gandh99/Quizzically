package com.gandh99.quizzically.quiz.quizOption;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "quiz_options")
public class QuizOption {
  @Id
  @Column(name = "quiz_option_id")
  private Integer quizOptionId;

  @Column(name = "quiz_question_id")
  private Integer quizQuestionId;

  @Column(name = "text")
  private String text;

  @Column(name = "is_correct")
  private Boolean isCorrect;

  public QuizOption() {
  }

  public QuizOption(Integer quizOptionId, Integer quizQuestionId, String text,
      Boolean isCorrect) {
    this.quizOptionId = quizOptionId;
    this.quizQuestionId = quizQuestionId;
    this.text = text;
    this.isCorrect = isCorrect;
  }

  public Integer getQuizOptionId() {
    return quizOptionId;
  }

  public void setQuizOptionId(Integer quizOptionId) {
    this.quizOptionId = quizOptionId;
  }

  public Integer getQuizQuestionId() {
    return quizQuestionId;
  }

  public void setQuizQuestionId(Integer quizQuestionId) {
    this.quizQuestionId = quizQuestionId;
  }

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }

  public Boolean getCorrect() {
    return isCorrect;
  }

  public void setCorrect(Boolean correct) {
    isCorrect = correct;
  }
}
