package com.gandh99.quizzically.quiz;

import com.gandh99.quizzically.quiz.quizOption.QuizOption;
import com.gandh99.quizzically.quiz.quizOption.QuizOptionService;
import com.gandh99.quizzically.quiz.quizOverview.QuizOverview;
import com.gandh99.quizzically.quiz.quizOverview.QuizOverviewService;
import com.gandh99.quizzically.quiz.quizQuestion.QuizQuestion;
import com.gandh99.quizzically.quiz.quizQuestion.QuizQuestionService;
import com.gandh99.quizzically.user.User;
import com.gandh99.quizzically.user.UserService;
import com.gandh99.quizzically.util.JwtUtil;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/quiz")
@RestController
public class QuizController {

  private final QuizOverviewService quizOverviewService;
  private final QuizQuestionService quizQuestionService;
  private final QuizOptionService quizOptionService;

  @Autowired
  private final UserService userService;

  @Autowired
  private final JwtUtil jwtUtil;

  @Autowired
  public QuizController(
      QuizOverviewService quizOverviewService,
      QuizQuestionService quizQuestionService,
      QuizOptionService quizOptionService,
      UserService userService,
      JwtUtil jwtUtil) {
    this.quizOverviewService = quizOverviewService;
    this.quizQuestionService = quizQuestionService;
    this.quizOptionService = quizOptionService;
    this.userService = userService;
    this.jwtUtil = jwtUtil;
  }

  @PostMapping(path = "/insert")
  public ResponseEntity<String> insertQuiz(@Valid @NonNull @RequestBody QuizWrapper quizWrapper) {
    try {
      Optional<User> user = jwtUtil.getUserFromPrincipal();

      // Insert quiz overview
      QuizOverview quizOverview = quizWrapper.getQuizOverview();
      quizOverview.setOwnerId(user.get().getUserId());
      int quizOverviewId = quizOverviewService.insertQuizOverview(quizOverview);

      List<QuizQuestion> quizQuestionList = quizWrapper.getQuizQuestion();
      quizQuestionList.forEach(quizQuestion -> {
        // Insert quiz question
        quizQuestion.setQuizOverviewId(quizOverviewId);
        int quizQuestionId = quizQuestionService.insertQuizQuestion(quizQuestion);

        // Insert quiz options
        List<QuizOption> quizOptionList = quizQuestion.getQuizOptionList();
        quizOptionList.forEach(quizOption -> {
          quizOption.setQuizQuestionId(quizQuestionId);
          quizOptionService.insertQuizOption(quizOption);
        });
      });

      return new ResponseEntity<>(HttpStatus.OK);
    } catch (Exception e) {
      e.printStackTrace();
      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
  }

  @GetMapping("/get-quizzes")
  public List<QuizWrapper> getQuizzes() {
    Optional<User> user = jwtUtil.getUserFromPrincipal();
    List<QuizWrapper> quizWrappers = new ArrayList<>();

    // Get the quiz overview
    List<QuizOverview> quizOverview = quizOverviewService.getQuizOverview(user.get());

    quizOverview.forEach(overview -> {
      // Get the quiz questions
      int quizOverviewId = overview.getQuizOverviewId();
      List<QuizQuestion> quizQuestions = quizQuestionService.getQuizQuestions(quizOverviewId);

      // Add quiz overview and quiz questions into the quiz wrapper list
      quizWrappers.add(new QuizWrapper(overview, quizQuestions));
    });

    return quizWrappers;
  }

  @GetMapping("/get-quiz")
  public QuizWrapper getQuizByQuizOverviewId(int quizOverviewId) {
    // Get quiz overview
    QuizOverview quizOverview = quizOverviewService.getQuizOverviewById(quizOverviewId);

    // Get quiz questions
    List<QuizQuestion> quizQuestions = quizQuestionService.getQuizQuestions(quizOverviewId);

    return new QuizWrapper(quizOverview, quizQuestions);
  }
}
