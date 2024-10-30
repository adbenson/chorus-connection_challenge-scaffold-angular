import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChorusListPageComponent } from './pages/chorus-list-page/chorus-list-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ChorusDetailPageComponent } from './pages/chorus-detail-page/chorus-detail-page.component';
import { ChorusDetailComponent } from './chorus/chorus-detail/chorus-detail.component';
import { ChorusDetailEditComponent } from './chorus/chorus-detail-edit/chorus-detail-edit.component';

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
  },
  {
    path: 'chorus/:id',
    component: ChorusDetailPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ChorusDetailComponent
      },
      {
        path: 'edit',
        component: ChorusDetailEditComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
