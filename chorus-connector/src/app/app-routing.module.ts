import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChorusListPageComponent } from './pages/chorus-list-page/chorus-list-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/chorus-list',
    pathMatch: 'full',
  },
  {
    path: 'chorus-list',
    component: ChorusListPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
