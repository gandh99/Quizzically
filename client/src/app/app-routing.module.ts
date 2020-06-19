import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationMainComponent } from './authentication/components/authentication-main/authentication-main.component';
import { HomepageComponent } from './home/components/homepage/homepage.component';
import { TakeQuizMainComponent } from './take-quiz/components/take-quiz-main/take-quiz-main.component';
import { AuthenticationGuard } from './guards/authentication.guard';


const routes: Routes = [
  { path: 'quiz', component: TakeQuizMainComponent },
  { path: 'authentication', component: AuthenticationMainComponent },
  { path: 'home', component: HomepageComponent, canActivate: [AuthenticationGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/authentication', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
