import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizWrapper } from 'src/app/create-quiz/models/quiz-wrapper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetQuizService {
  endpoint: string = '/quiz/get-quiz'

  constructor(private http: HttpClient) { }

  getQuiz(quizCode: String): Observable<QuizWrapper> {
    return this.http.get<QuizWrapper>(`${this.endpoint}/id?id=${quizCode}`)
  }

}