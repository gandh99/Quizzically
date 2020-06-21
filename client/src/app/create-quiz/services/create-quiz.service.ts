import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuizWrapper } from '../models/quiz-wrapper';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  observe: 'response' as 'body',
}

@Injectable({
  providedIn: 'root'
})
export class CreateQuizService {
  endpoint: string = '/quiz/insert'

  constructor(private http: HttpClient) { }

  createQuiz(quizWrapper: QuizWrapper): Observable<any> {
    return this.http.post<any>(this.endpoint, quizWrapper, httpOptions)
  }

}
