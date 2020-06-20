package com.gandh99.quizzically.quiz;

import com.gandh99.quizzically.quiz.quizOverview.QuizOverview;
import com.gandh99.quizzically.quiz.quizOverview.QuizOverviewService;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/quiz")
@RestController
public class QuizController {
  private final QuizOverviewService quizOverviewService;

  @Autowired
  public QuizController(
      QuizOverviewService quizOverviewService) {
    this.quizOverviewService = quizOverviewService;
  }

  @PostMapping(path = "/insert")
  public ResponseEntity<String> insertQuiz(@Valid @NonNull @RequestBody QuizOverview quizOverview) {
    try {
      quizOverviewService.insertQuizOverview(quizOverview);
      return new ResponseEntity<>(HttpStatus.OK);
    } catch (Exception e) {
      e.printStackTrace();
      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
  }
}
