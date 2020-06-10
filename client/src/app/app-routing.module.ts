import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationMainComponent } from './authentication/components/authentication-main/authentication-main.component';
import { HomepageComponent } from './home/components/homepage/homepage.component';
import { TakeQuizMainComponent } from './take-quiz/components/take-quiz-main/take-quiz-main.component';


const routes: Routes = [
  { path: 'quiz', component: TakeQuizMainComponent },
  { path: 'authentication', component: AuthenticationMainComponent },
  { path: 'home', component: HomepageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: TakeQuizMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
