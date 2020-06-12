package com.gandh99.quizzically.user;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "users")
public class User {

  @Id
  private final int id;
  private final String username;
  private final String password;
  private final Date createdAt;

  public User(int id, String username, String password, Date createdAt) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.createdAt = createdAt;
  }

}
