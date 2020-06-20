package com.gandh99.quizzically.quiz;

import com.gandh99.quizzically.quiz.quizOverview.QuizOverview;
import com.gandh99.quizzically.quiz.quizOverview.QuizOverviewService;
import com.gandh99.quizzically.quiz.quizQuestion.QuizQuestion;
import com.gandh99.quizzically.quiz.quizQuestion.QuizQuestionService;
import java.util.List;
import java.util.stream.Collectors;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
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
  private final QuizQuestionService quizQuestionService;

  @Autowired
  public QuizController(
      QuizOverviewService quizOverviewService,
      QuizQuestionService quizQuestionService) {
    this.quizOverviewService = quizOverviewService;
    this.quizQuestionService = quizQuestionService;
  }

  @PostMapping(path = "/insert")
  public ResponseEntity<String> insertQuiz(@Valid @NonNull @RequestBody QuizWrapper quizWrapper) {
    try {
      // Insert quiz overview
      QuizOverview quizOverview = quizWrapper.getQuizOverview();
      int quizOverviewId = quizOverviewService.insertQuizOverview(quizOverview);

      // Insert quiz questions
      List<QuizQuestion> quizQuestionList = quizWrapper.getQuizQuestion();
      quizQuestionList.forEach(quizQuestion -> quizQuestion.setQuizOverviewId(quizOverviewId));
      quizQuestionList.forEach(quizQuestionService::insertQuizQuestion);

      return new ResponseEntity<>(HttpStatus.OK);
    } catch (Exception e) {
      e.printStackTrace();
      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
  }
}
