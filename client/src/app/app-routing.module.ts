import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizMainComponent } from './quiz/components/quiz-main/quiz-main.component';
import { AuthenticationMainComponent } from './authentication/components/authentication-main/authentication-main.component';
import { HomepageComponent } from './home/components/homepage/homepage.component';


const routes: Routes = [
  { path: 'quiz', component: QuizMainComponent },
  { path: 'authentication', component: AuthenticationMainComponent },
  { path: 'home', component: HomepageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: QuizMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
