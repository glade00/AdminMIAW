import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ClientsComponent } from './clients/clients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {
    path: 'connexion',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthenticationGuard],
    component: DashboardComponent
  },
  {
    path: 'competences',
    canActivate: [AuthenticationGuard],
    component: SkillsComponent
  },
  {
    path: 'clients',
    children: [

      {
        path: '',
        canActivate: [AuthenticationGuard],
        component: ClientsComponent
      },
      {
        path: 'nouveau',
        canActivate: [AuthenticationGuard],
        component: ClientFormComponent
      },
      {
        path: ':id',
        canActivate: [AuthenticationGuard],
        component: ClientComponent
      },
      {
        path: ':id/edit',
        canActivate: [AuthenticationGuard],
        component: ClientFormComponent,
        data: {
          edit: true
        }
      }
    ]
  },
  {
    path: '**',
    canActivate: [AuthenticationGuard],
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
