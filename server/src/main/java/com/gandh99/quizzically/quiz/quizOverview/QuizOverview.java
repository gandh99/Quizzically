package com.gandh99.quizzically.quiz.quizOverview;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "quiz_overview")
public class QuizOverview {
  @Column(name = "quiz_overview_id")
  private Integer quizOverviewId;

  @Column(name = "owner_id")
  private Integer ownerId;

  @Column(name = "title")
  private String title;

  @Column(name = "description")
  private String description;

  @Column(name = "created_at")
  private Date createdAt;

//  @OneToMany
//  @JoinTable(name = "quiz_questions", joinColumns = @JoinColumn(name = "quiz_overview_id"))
//  private QuizQuestion[] quizQuestions;


  public QuizOverview() {
    super();
  }

  public QuizOverview(Integer quizOverviewId, Integer ownerId, String title,
      String description, Date createdAt) {
    this.quizOverviewId = quizOverviewId;
    this.ownerId = ownerId;
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
  }

  public Integer getQuizOverviewId() {
    return quizOverviewId;
  }

  public void setQuizOverviewId(Integer quizOverviewId) {
    this.quizOverviewId = quizOverviewId;
  }

  public Integer getOwnerId() {
    return ownerId;
  }

  public void setOwnerId(Integer ownerId) {
    this.ownerId = ownerId;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Date getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(Date createdAt) {
    this.createdAt = createdAt;
  }
}
