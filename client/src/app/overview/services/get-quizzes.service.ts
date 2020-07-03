import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizWrapper } from 'src/app/create-quiz/models/quiz-wrapper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetQuizzesService {

  endpoint: string = '/quiz/get-quizzes'

  constructor(private http: HttpClient) { }

  getQuizzes(): Observable<QuizWrapper> {
    return this.http.get<any>(this.endpoint)
  }
}
