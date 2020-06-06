import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizMainComponent } from './quiz/components/quiz-main/quiz-main.component';
import { LoginComponent } from './authentication/components/login/login.component';


const routes: Routes = [
  { path: 'quiz', component: QuizMainComponent },
  { path: 'authentication', component: LoginComponent },
  { path: '', redirectTo: '/quiz', pathMatch: 'full' },
  { path: '**', component: QuizMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
